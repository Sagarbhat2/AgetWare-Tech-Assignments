function minimizeLoss(prices) {
    let minLoss = Infinity;
    let buyYear = -1;
    let sellYear = -1;

    for (let i = 0; i < prices.length - 1; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            if (prices[i] > prices[j]) {
                let loss = prices[i] - prices[j];

                if (loss < minLoss) {
                    minLoss = loss;
                    buyYear = i + 1;
                    sellYear = j + 1;
                }
            }
        }
    }

    return {
        buyYear: buyYear,
        sellYear: sellYear,
        loss: minLoss === Infinity ? null : minLoss
    };
}

const prices = [20, 15, 7, 2, 13];
const result = minimizeLoss(prices);
console.log(`Buy Year: ${result.buyYear}, Sell Year: ${result.sellYear}, Loss: ${result.loss}`);