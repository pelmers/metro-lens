import ws from "isomorphic-ws";
import { RpcClient, WebsocketTransport } from "roots-rpc";
import {
  WS_DOMAIN_NAME,
  RPC_WS_PATH,
  CLIENT_CALLS_SERVER_RPC_PREFIX,
  d,
  e,
  t,
} from "../constants";
import { ServerCalls, TClippedAndUnclippedXml } from "../rpc";
import { AnyJson, AsyncFN, FNDecl } from "roots-rpc/dist/rpcTypes";

export let getMapboxKey: AsyncFN<null, string>;
export let getParkingAreas: AsyncFN<AnyJson, TClippedAndUnclippedXml>;

let alreadyConnected = false;

export function connectClient() {
  if (alreadyConnected) {
    throw new Error("Already connected");
  }
  alreadyConnected = true;
  const socket = new ws(`${WS_DOMAIN_NAME}/${RPC_WS_PATH}`);
  const client = new RpcClient(
    new WebsocketTransport(socket, CLIENT_CALLS_SERVER_RPC_PREFIX)
  );
  function connect<I extends AnyJson, O extends AnyJson>(
    loader: () => FNDecl<I, O>
  ) {
    const { name } = loader;
    return t(e(client.connect(loader)), name);
  }
  getMapboxKey = connect(ServerCalls.GetMapboxApiKey);
  getParkingAreas = connect(ServerCalls.GetParkingAreas);

  socket.onopen = () => {
    d(`Socket opened`);
  };
  // Reconnect if socket closes
  socket.onclose = () => {
    d(`Socket closed, reconnecting...`);
    alreadyConnected = false;
    client.dispose();
    connectClient();
  };
}
