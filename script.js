let start = 1;
let end = 21;

async function init() {
    for (let i = start; i < end; i++) {

        let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let response = await fetch(url);
        let pokemon = await response.json();
        render(pokemon, i);
    }

}


function render(pokemon, i) {
    console.log(pokemon);
    document.getElementById('content').innerHTML += /*html*/`
        <div onclick="openPokemon(${i})" class="card" id="card${i}">
            <h2>${pokemon['name']}</h2>
            <p>#00${pokemon['id']}</p>
            <img src="${pokemon['sprites']['other']['dream_world']['front_default']}" alt="">
            <p class="type" id="type${i}">${pokemon['types']['0']['type']['name']}</p>
        </div>
    `
    changeColorSmall(i, pokemon);
}


async function openPokemon(i) {
    let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    let response = await fetch(url);
    let pokemon = await response.json();
    console.log(pokemon['name']);
    document.getElementById('openCard').classList.remove('d-none');
    document.getElementById('bigCard').innerHTML = /*html*/`
        <div>
            <div class="upperCard" id="upperCard${i}">
                <p onclick="closeBigCard()" class="closeX">X</p>
                <h2>${pokemon['name']}</h2>
                <p>#00${pokemon['id']}</p>
                <div class="changeCard">
                    <p onclick="lastPokemon(${i})" class="arrow" id="arrow1"><</p>
                    <img src="${pokemon['sprites']['other']['dream_world']['front_default']}" alt="">
                    <p onclick="nextPokemon(${i})" class="arrow">></p>
                </div>
            </div>
            <div class="lowerCard">
                <div class="menu">
                    <h3 onclick="openInfo()" id="menu1" class="menu-open">Info</h3>
                    <h3 onclick="openStats()" id="menu2">Stats</h3>
                    <h3 onclick="openMoves(${i})" id="menu3">Moves</h3>
                </div>
                <div id="info">
                    <p>Type: ${pokemon['types']['0']['type']['name']}</p>
                    <p>Base Experience: ${pokemon['base_experience']}</p>
                    <p>Abilities: ${pokemon['abilities']['0']['ability']['name']}, ${pokemon['abilities']['1']['ability']['name']}</p>
                    <p>Height: ${pokemon['height']}</p>
                    <p>Weight: ${pokemon['weight']}</p>
                </div>
                <div id="stats" class="d-none">
                    <div>
                        <canvas id="myChart"></canvas>
                    </div>
                </div>
                <div id="moves" class="d-none">
                </div>
            </div>
        </div>
    `
    changeColorBig(i, pokemon);
    renderChart(i);
}


function closeBigCard() {
    document.getElementById('openCard').classList.add('d-none');
}


function lastPokemon(i) {
    if (i == 1) {
        alert('Dies ist das erste Pokemon. Davor gibt es keine weiteren Pokemons.');
    } else {
        i--;
        openPokemon(i);
    }
}


function nextPokemon(i) {
    i++;
    openPokemon(i);
}


function openInfo() {
    document.getElementById('menu1').classList.add('menu-open');
    document.getElementById('menu2').classList.remove('menu-open');
    document.getElementById('menu3').classList.remove('menu-open');
    document.getElementById('info').classList.remove('d-none');
    document.getElementById('stats').classList.add('d-none');
    document.getElementById('moves').classList.add('d-none');
}


function openStats() {
    document.getElementById('menu2').classList.add('menu-open');
    document.getElementById('menu1').classList.remove('menu-open');
    document.getElementById('menu3').classList.remove('menu-open');
    document.getElementById('stats').classList.remove('d-none');
    document.getElementById('info').classList.add('d-none');
    document.getElementById('moves').classList.add('d-none');
}


function openMoves(i) {
    document.getElementById('menu3').classList.add('menu-open');
    document.getElementById('menu1').classList.remove('menu-open');
    document.getElementById('menu2').classList.remove('menu-open');
    document.getElementById('moves').classList.remove('d-none');
    document.getElementById('stats').classList.add('d-none');
    document.getElementById('info').classList.add('d-none');
    loadMoves(i);
}


async function loadMoves(i) {
    let moves = document.getElementById('moves');
    let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    let response = await fetch(url);
    let pokemon = await response.json();

    for (let j = 0; j < pokemon['moves'].length; j++) {
        let move = pokemon['moves'][j]['move']['name'];
        moves.innerHTML += move + ', ';
    }
}


function loadMore() {
    start = start + 20;
    end = end + 20;
    init();
}