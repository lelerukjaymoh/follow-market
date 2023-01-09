import { WebSocket } from 'ws';

const stream = () => {
    try {
        const ws = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade');

        ws.on('message', function incoming(data: any) {
            console.log(JSON.parse(data));
        });

    } catch (error) {
        console.log("Streaming data error ", error)
    }
}

stream()