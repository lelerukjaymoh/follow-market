import { streamPrice } from "./stream/price"

const main = async () => {
    console.log("Start app")
    await streamPrice()
}

main()