import {ConnectorConfig, Payload, RSocketConnector} from "rsocket-core";
import {WebsocketClientTransport} from "rsocket-websocket-client";

function client(options: ConnectorConfig): RSocketConnector {
    return new RSocketConnector({
        setup: {
            keepAlive: 1000000,
            lifetime: 100000,
            dataMimeType: 'application/cbor',
            metadataMimeType: 'message/x.rsocket.routing.v0',
        },
        transport: new WebsocketClientTransport({
            url: 'ws://localhost:6565/rsocket'
        }),
    })

    async function makeRequest(client: RSocketConnector, data: JSON) {
        return new Promise(async (resolve, reject) => {
            const connection = await client.connect()
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
                        console.log("emailed")
                        resolve("emailed");
                    }
                }
            )
        }
    );
}
