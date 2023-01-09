import { WebsocketClient } from "binance";

console.log("Keys ", process.env.BINANCE_KEY, process.env.BINANCE_SECRET)

export const wsClient = new WebsocketClient({
    api_key: process.env.BINANCE_KEY,
    api_secret: process.env.BINANCE_SECRET,
    beautify: true,
    disableHeartbeat: false,
    wsUrl: 'wss://testnet.binance.vision/ws'
});
