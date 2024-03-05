function changeColor(i, pokemon) {
    let type = pokemon['types']['0']['type']['name'];
    let card = document.getElementById(`card${i}`);
    console.log(type);
    switch (type) {
        case 'grass':
            card.style = 'background-color: #94D996';
            break;

        case 'fire':
            card.style = 'background-color: #FFB780';
            break;

        case 'water':
            card.style = 'background-color: #7FD3FF';
            break;

        case 'bug':
            card.style = 'background-color: #B1CCA9';
            break;

        case 'normal':
            card.style = 'background-color: #E8D9A0';
            break;

        case 'poison':
            card.style = 'background-color: #D87FAB';
            break;

        case 'electric':
            card.style = 'background-color: #F4F3BB';
            break;

        case 'ground':
            card.style = 'background-color: #C99F87';
            break;

        case 'fairy':
            card.style = 'background-color: #FFB9DB';
            break;

        case 'fighting':
            card.style = 'background-color: #DE7A7A';
            break;

        case 'psychic':
            card.style = 'background-color: #8BA7B5';
            break;

        case 'rock':
            card.style = 'background-color: #ABABAB';
            break;

        case 'ghost':
            card.style = 'background-color: #B9ACBD';
            break;

        case 'flying':
            card.style = 'background-color: #D5A9FF';
            break;

        case 'steel':
            card.style = 'background-color: #AFC9F9';
            break;

        case 'ice':
            card.style = 'background-color: #99DBFE';
            break;

        case 'dragon':
            card.style = 'background-color: #D6A8D6';
            break;

        case 'dark':
            card.style = 'background-color: #564E5B';
            break;

        default:
            card.style = 'background-color: #D6EAD0';
            break;
    }
}