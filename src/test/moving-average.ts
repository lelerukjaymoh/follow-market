class MovingAverage {
    totalPrice = 0
    count = 0
    MAs: number[] = []

    constructor() { }

    calculateMovingAverage(price: number) {
        try {
            // Keep track of the total and the number of items used for the ma calculation  
            this.totalPrice += price
            this.count += 1

            // Get the MA, and set in an array
            const MA = this.totalPrice / this.count
            this.MAs.push(MA)

            if (this.MAs.length > 8) {
                let partsItems = Math.floor(this.MAs.length / 3)

                let firstItems = this.MAs.slice(-(partsItems * 3)).splice(0, partsItems)
                let midItems = this.MAs.slice(-(partsItems * 2)).splice(0, partsItems)
                let lastItems = this.MAs.slice(-partsItems)

                let firstMa = 0
                let midMa = 0
                let lastMa = 0

                for (const item of firstItems) {
                    firstMa += item
                }

                for (const item of midItems) {
                    midMa += item
                }

                for (const item of lastItems) {
                    lastMa += item
                }

                console.log("MAs ", firstMa, midMa, lastMa)

                if (midMa >= firstMa && lastMa >= midMa) {
                    console.log("🚀")
                } else if (firstMa >= midMa && midMa >= lastMa) {
                    console.log("🔻️")
                }
            }
        } catch (error) {
            console.log("Error ", error)
        }
    }
}

const ma = new MovingAverage()
