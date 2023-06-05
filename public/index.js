async function main() {

    const timeChartCanvas = document.querySelector('#time-chart');
    const highestPriceChartCanvas = document.querySelector('#highest-price-chart');
    const averagePriceChartCanvas = document.querySelector('#average-price-chart');

}

main()

fetch(https://api.twelvedata.com/time_series?apikey=dd41dd314e274130af2ad70a36185b00&interval=1day&symbol=TSLA&outputsize=1)