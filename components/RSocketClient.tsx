import {ConnectorConfig, Payload, RSocketConnector} from "rsocket-core";
import {WebsocketClientTransport} from "rsocket-websocket-client";

const defaultSetup = {
  keepAlive: 1000000,
  lifetime: 100000,
  dataMimeType: "application/cbor",
  metadataMimeType: "message/x.rsocket.routing.v0",
};

function connectorConfig(url: string): ConnectorConfig {
  return {
    setup: defaultSetup,
    transport: new WebsocketClientTransport({
      url: url,
    }),
  };
}

function connector(options: ConnectorConfig): RSocketConnector {
  return new RSocketConnector(options);
}

async function makeRequest(rSocketConnector: RSocketConnector, data: JSON) {
  return new Promise(async (resolve, reject) => {
    const connection = await rSocketConnector.connect();
    connection.requestResponse(
      {
        data: Buffer.from(JSON.stringify(data)),
      },
      {
        onExtension(): void {
          // TODO document why this method 'onExtension' is empty
        },
        onError: (e: Error) => reject(e),
        onNext: (payload: Payload, isComplete: boolean) => {
          console.log(
            `payload[data: ${payload.data}; metadata: ${payload.metadata}]|${isComplete}`
          );
          resolve(payload);
        },
        onComplete: () => {
          console.log("emailed");
          resolve("emailed");
        },
      }
    );
  });
}
