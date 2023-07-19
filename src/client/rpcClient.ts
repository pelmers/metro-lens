import ws from "isomorphic-ws";
import { RpcClient, WebsocketTransport } from "roots-rpc";
import {
  WS_DOMAIN_NAME,
  RPC_WS_PATH,
  CLIENT_CALLS_SERVER_RPC_PREFIX,
  d,
} from "../constants";
import { ServerCalls } from "../rpc";

export let getMapboxKey: () => Promise<string>;

let alreadyConnected = false;

export function connect() {
  if (alreadyConnected) {
    throw new Error("Already connected");
  }
  alreadyConnected = true;
  const socket = new ws(`${WS_DOMAIN_NAME}/${RPC_WS_PATH}`);
  const client = new RpcClient(
    new WebsocketTransport(socket, CLIENT_CALLS_SERVER_RPC_PREFIX)
  );
  getMapboxKey = client.connect(ServerCalls.GetMapboxApiKey);

  // Reconnect if socket closes
  socket.onclose = () => {
    d(`Socket closed, reconnecting...`);
    alreadyConnected = false;
    client.dispose();
    connect();
  };
}
