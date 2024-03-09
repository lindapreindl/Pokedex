let statnames = [];
let statnumbers = [];

function renderChart(i) {
    fillStats(i);

    const ctx = document.getElementById('myChart');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: statnames,
            datasets: [{
                label: 'stats',
                data: statnumbers,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}


async function fillStats(i) {
    let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    let response = await fetch(url);
    let pokemon = await response.json();

    for (let j = 0; j < pokemon['stats'].length; j++) {
        statnames.push(pokemon['stats'][j]['stat']['name']);
    }
    console.log(statnames);

    for (let j = 0; j < pokemon['stats'].length; j++) {
        statnumbers.push(pokemon['stats'][j]['base_stat']);
    }
    console.log(statnumbers);
}