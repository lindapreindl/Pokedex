

function renderChart(i, statnames, statnumbers) {
    fillStats(i, statnames, statnumbers);

    const ctx = document.getElementById('myChart');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: statnames,
            datasets: [{
                label: 'value',
                data: statnumbers,
                borderWidth: 1,
                backgroundColor: ['#E2B4D0', '#F7CAB5', '#F5EF99', '#C2DBBE', '#A2D4DF', '#90A3EF']
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


async function fillStats(i, statnames, statnumbers) {
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