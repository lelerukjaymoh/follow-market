import { wsClient } from "./client"

export const streamPrice = async () => {
    console.log("Start stream")
    // console.log(wsClient)

    wsClient.subscribeMarkPrice("btc", "usdm")

    // receive raw events
    wsClient.on('message', (data) => {
        console.log('raw message received ', JSON.stringify(data, null, 2));
    });

    // // receive formatted events with beautified keys. Any "known" floats stored in strings as parsed as floats.
    // wsClient.on('formattedMessage', (data) => {
    //     console.log('formattedMessage: ', data);
    // });

    await wsClient.subscribeUsdFuturesUserDataStream(true);

}

