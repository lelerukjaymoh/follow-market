import { WebSocket } from 'ws';

class Streamer {
    streamURL = "wss://fstream.binance.com/ws/btcusdt@aggTrade"

    constructor() { }

    stream() {
        try {
            const ws = new WebSocket(this.streamURL);

            ws.on('message', (data: any) => {
                data = JSON.parse(data)

                const price = data.p
                console.log(price);

            });

            ws.on("error", (error) => {
                console.log("Error ", error)
            })


        } catch (error) {
            console.log("Error streaming price ", error)
        }
    }
}

export const streamer = new Streamer()