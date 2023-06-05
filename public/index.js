async function main() {

    const timeChartCanvas = document.querySelector('#time-chart');
    const highestPriceChartCanvas = document.querySelector('#highest-price-chart');
    const averagePriceChartCanvas = document.querySelector('#average-price-chart');

}

main()

const response = await fetch('https://api.twelvedata.com/time_series?apikey=dd41dd314e274130af2ad70a36185b00&interval=1day&symbol=TSLA&outputsize=1')

const result = await response.json()

const { GME, MSFT, DIS, BNTX } = mockData;

const stocks = [GME, MSFT, DIS, BNTX];

stocks.forEach( stock => stock.values.reverse())

new Chart(timeChartCanvas.getContext('2d'), {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor:  'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)'
        }]
    }
});

