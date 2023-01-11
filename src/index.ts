import { streamer } from "./stream/stream"

const main = async () => {
    console.log("Start app")
    streamer.stream()
}

main()