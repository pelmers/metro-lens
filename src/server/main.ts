// Serve index.html on the route '/'

import url from "url";
import http from "http";
import path from "path";

import express from "express";
import compression from "compression";
import favicon from "serve-favicon";
import consoleStamp from "console-stamp";
import ws from "ws";
import {
  CLIENT_CALLS_SERVER_RPC_PREFIX,
  RPC_WS_PATH,
  d,
  e,
} from "../constants";
import { r } from "./utils";
import { RpcServer, WebsocketTransport } from "roots-rpc";
import { ServerCalls, wrapServerErrors } from "../rpc";

consoleStamp(console);
const app = express();
const port = 4041;

const mapboxApiKey = process.env.MAPBOX_API_KEY;

async function main() {
  app.use(compression());
  app.use(favicon(r("static/favicon.ico")));
  app.use("/dist", express.static(r("dist")));
  app.use("/static", express.static(r("static")));
  app.get("/", (_, res) => res.sendFile(r("index.html")));

  const server = app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
  const wss = new ws.Server({ server });

  wss.on("connection", (socket, req) => {
    if (req.url === "/" + RPC_WS_PATH) {
      handleRpcConnection(socket, req);
    }
  });
}

function handleRpcConnection(socket: ws, req: http.IncomingMessage) {
  d(
    `Client(${JSON.stringify(req.headers["user-agent"])}) connected to ${
      req.url
    }`
  );
  const server = new RpcServer(
    new WebsocketTransport(socket, CLIENT_CALLS_SERVER_RPC_PREFIX)
  );
  wrapServerErrors(server);
  server.register(ServerCalls.GetMapboxApiKey, async () => mapboxApiKey);
}

main();
