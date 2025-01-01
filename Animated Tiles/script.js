const colors = [
    '#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A',
    '#98D8C8', '#F06292', '#AED581', '#FFD54F',
    '#81D4FA', '#FFB74D', '#9575CD', '#4DB6AC'
];

function createTiles() {
    const container = document.getElementById('tile-container');
    for (let i = 0; i < 64; i++) {
        const tile = document.createElement('div');
        tile.className = 'tile';
        tile.addEventListener('mouseenter', changeTileColor);
        tile.addEventListener('mouseleave', resetTileColor);
        container.appendChild(tile);
    }
}

function changeTileColor(event) {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    event.target.style.backgroundColor = randomColor;
}

function resetTileColor(event) {
    event.target.style.backgroundColor = '#ddd';
}

/*    To make it Animation Random Over Tiles

function animateRandomTiles() {
    const tiles = document.querySelectorAll('.tile');
    const randomTile = tiles[Math.floor(Math.random() * tiles.length)];
    changeTileColor({ target: randomTile });
    setTimeout(() => {
        resetTileColor({ target: randomTile });
    }, 1000);
}*/

createTiles();
setInterval(animateRandomTiles, 2000);