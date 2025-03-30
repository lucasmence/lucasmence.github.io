const FIRE_WIDTH = 200;
const FIRE_HEIGHT = 75;
const PIXEL_SIZE = 8;
const FIRE_SPEED = 150;
const FIRE_INTENSITY = 3;
const WIND_FORCE = 3;

const canvas = document.getElementById("fireCanvas");
const ctx = canvas.getContext("2d");

canvas.width = FIRE_WIDTH * PIXEL_SIZE;
canvas.height = FIRE_HEIGHT * PIXEL_SIZE;

const firePixels = new Array(FIRE_WIDTH * FIRE_HEIGHT).fill(0);

const fireColorsPurple = [
    "#3A075F", "#1A071F", "#2A073F", "#3A075F", "#4A077F", "#5A079F", "#6A07BF", "#7A07DF",
    "#8A07FF", "#9A27FF", "#AA47FF", "#BA67FF", "#CA87FF", "#DAA7FF", "#EAC7FF", "#FAE7FF",
    "#FFFFFF"
];

const fireColors = fireColorsPurple;

function createFireBase() {
    for (let x = 0; x < FIRE_WIDTH; x++) {
        const lastIndex = (FIRE_HEIGHT - 1) * FIRE_WIDTH + x;
        firePixels[lastIndex] = fireColors.length - 1;
    }
}

function updateFire() {
    for (let x = 0; x < FIRE_WIDTH; x++) {
        for (let y = FIRE_HEIGHT - 1; y > 0; y--) {
            const index = y * FIRE_WIDTH + x;
            const belowIndex = (y + 1) * FIRE_WIDTH + x;

            if (belowIndex >= FIRE_WIDTH * FIRE_HEIGHT) continue;

            let windEffect = x + WIND_FORCE + (Math.random() > 0.5 ? 1 : -1);
            if (windEffect < 0) windEffect = 0;
            if (windEffect >= FIRE_WIDTH) windEffect = FIRE_WIDTH - 1;

            const spreadIndex = (y + 1) * FIRE_WIDTH + windEffect;

            const left = x > 0 ? firePixels[belowIndex - 1] : firePixels[belowIndex];
            const right = x < FIRE_WIDTH - 1 ? firePixels[belowIndex + 1] : firePixels[belowIndex];
            const below = firePixels[belowIndex];

            const avgValue = (left + right + below) / 3;

            const decay = Math.random() * FIRE_INTENSITY * 0.5;
            let newValue = Math.floor(avgValue - decay);

            firePixels[index] = Math.max(newValue, 3);
        }
    }
}

function renderFire() {
    for (let x = 0; x < FIRE_WIDTH; x++) {
        for (let y = 0; y < FIRE_HEIGHT; y++) {
            const index = y * FIRE_WIDTH + x;
            const colorIndex = firePixels[index];
            ctx.fillStyle = fireColors[colorIndex] || "#000";
            ctx.fillRect(x * PIXEL_SIZE, y * PIXEL_SIZE, PIXEL_SIZE, PIXEL_SIZE);
        }
    }
}

function gameLoop() {
    updateFire();
    renderFire();
    setTimeout(gameLoop, 1000 / (FIRE_SPEED / 10));
}

createFireBase();
gameLoop();