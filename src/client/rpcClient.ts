import ws from "isomorphic-ws";
import { RpcClient, WebsocketTransport } from "roots-rpc";
import {
  WS_DOMAIN_NAME,
  RPC_WS_PATH,
  CLIENT_CALLS_SERVER_RPC_PREFIX,
  d,
  e,
} from "../constants";
import { ServerCalls } from "../rpc";
import { AnyJson, AsyncFN } from "roots-rpc/dist/rpcTypes";

export let getMapboxKey: AsyncFN<null, string>;
export let getParkingAreas: AsyncFN<AnyJson, AnyJson>;

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
  getMapboxKey = e(client.connect(ServerCalls.GetMapboxApiKey));
  getParkingAreas = e(client.connect(ServerCalls.GetParkingAreas));

  // Reconnect if socket closes
  socket.onclose = () => {
    d(`Socket closed, reconnecting...`);
    alreadyConnected = false;
    client.dispose();
    connect();
  };
}
