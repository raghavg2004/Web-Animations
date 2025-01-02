const colors = [
    '#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A',
    '#98D8C8', '#F06292', '#AED581', '#FFD54F',
    '#81D4FA', '#FFB74D', '#9575CD', '#4DB6AC'
];

const images = [
    'image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg',
    'image5.jpg', 'image6.jpg', 'image7.jpg', 'image8.jpg', 
    'image9.jpg', 'image10.jpg', 'image11.jpg', 'image12.jpg',
    'image13.jpg', 'image14.jpg', 'image15.jpg', 'image16.jpg'
];

function createTiles() {
    const container = document.getElementById('tile-container');
    container.style.gridTemplateColumns = 'repeat(4, 1fr)'; // Enforce 4 columns in the grid

    // Loop through images and create tiles
    images.forEach((imageSrc) => {
        const tile = createTile(imageSrc);
        container.appendChild(tile);
    });

    // Ensure the container is responsive
    window.addEventListener('resize', adjustTileSize);
    adjustTileSize(); // Initial adjustment
}

function createTile(imageSrc) {
    const tile = document.createElement('div');
    tile.className = 'tile';

    const frontImg = document.createElement('img');
    frontImg.src = imageSrc;
    frontImg.alt = 'Tile Image';

    // Random neon color glow effect with smaller intensity and spread
    tile.addEventListener('mouseenter', function () {
        const randomColor = generateRandomNeonColor();
        const glowIntensity = Math.random() * 10 + 5; // Smaller glow spread
        const glowSpread = Math.random() * 5 + 50; // Smaller glow blur

        tile.style.boxShadow = `0 0 ${glowSpread}px ${glowIntensity}px ${randomColor}, 
                                0 0 ${glowSpread * 1.5}px ${glowIntensity}px ${randomColor}`; // Dynamic neon effect
    });

    tile.addEventListener('mouseleave', function () {
        // Set a delayed reset to make the effect last for 3 seconds
        setTimeout(() => {
            tile.style.boxShadow = 'none'; /* Remove the glow after 3 seconds */
        }, 3000);
    });

    tile.appendChild(frontImg);

    return tile;
}

// Function to generate random neon colors dynamically
function generateRandomNeonColor() {
    const hue = Math.floor(Math.random() * 360); // Random hue between 0 and 360
    const saturation = Math.floor(Math.random() * 60 + 40); // Random saturation (between 40 and 100)
    const lightness = Math.floor(Math.random() * 40 + 40); // Random lightness (between 40 and 80)

    return `hsl(${hue}, ${saturation}%, ${lightness}%)`; // Neon color with hsl format
}

// Function to adjust tile size based on screen size
function adjustTileSize() {
    const container = document.getElementById('tile-container');
    const tileWidth = container.offsetWidth / 4 - 10; // Calculate width based on grid and gap
    const tiles = document.querySelectorAll('.tile');

    tiles.forEach(tile => {
        tile.style.width = `${tileWidth}px`;
        tile.style.height = `${tileWidth}px`;
    });

    const images = document.querySelectorAll('.tile img');
    images.forEach(img => {
        img.style.width = '80%'; // Proportionally adjust icon size
        img.style.height = '80%';
    });
}

createTiles();
