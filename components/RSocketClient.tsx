import {IdentitySerializer, JsonSerializer, Payload, RSocketClient} from 'rsocket-core';
import RSocketWebSocketClient from 'rsocket-websocket-client';

const client = new RSocketClient({
    serializers: {
        data: JsonSerializer,
        metadata: IdentitySerializer
    },
    setup: {
        keepAlive: 1000000,
        lifetime: 100000,
        dataMimeType: 'application/json',
        metadataMimeType: 'message/x.rsocket.routing.v0',
    },
    // @ts-ignore
    transport: new RSocketWebSocketClient({
        url: 'ws://localhost:6565/rsocket'
    }),
})

async function makeRequest(data: JSON) {
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
