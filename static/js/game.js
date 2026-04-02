const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');
const scoreElement = document.getElementById('score');
const gameOverElement = document.getElementById('game-over');
const finalScoreElement = document.getElementById('final-score');
const restartBtn = document.getElementById('restart-btn');

const player = {
    x: canvas.width / 2,
    y: canvas.height - 50,
    radius: 20,
    color: 'blue'
};

let blocks = [];
let score = 0;
let gameRunning = true;
let startTime = Date.now();

function createBlock() {
    const block = {
        x: Math.random() * (canvas.width - 50),
        y: 0,
        width: 50,
        height: 50,
        color: 'red',
        speed: 2 + Math.random() * 3
    };
    blocks.push(block);
}

function update() {
    if (!gameRunning) return;

    // Move player
    if (keys.left) player.x -= 5;
    if (keys.right) player.x += 5;
    if (keys.up) player.y -= 5;
    if (keys.down) player.y += 5;

    // Keep player in bounds
    player.x = Math.max(player.radius, Math.min(canvas.width - player.radius, player.x));
    player.y = Math.max(player.radius, Math.min(canvas.height - player.radius, player.y));

    // Move blocks
    blocks.forEach(block => {
        block.y += block.speed;
    });

    // Remove off-screen blocks
    blocks = blocks.filter(block => block.y < canvas.height);

    // Check collisions
    blocks.forEach(block => {
        if (player.x + player.radius > block.x &&
            player.x - player.radius < block.x + block.width &&
            player.y + player.radius > block.y &&
            player.y - player.radius < block.y + block.height) {
            gameOver();
        }
    });

    // Update score
    score = Math.floor((Date.now() - startTime) / 1000);
    scoreElement.textContent = `Score: ${score}`;
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw player
    ctx.beginPath();
    ctx.arc(player.x, player.y, player.radius, 0, Math.PI * 2);
    ctx.fillStyle = player.color;
    ctx.fill();

    // Draw blocks
    blocks.forEach(block => {
        ctx.fillStyle = block.color;
        ctx.fillRect(block.x, block.y, block.width, block.height);
    });
}

function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

function gameOver() {
    gameRunning = false;
    finalScoreElement.textContent = score;
    gameOverElement.style.display = 'block';
}

function restart() {
    player.x = canvas.width / 2;
    player.y = canvas.height - 50;
    blocks = [];
    score = 0;
    gameRunning = true;
    startTime = Date.now();
    gameOverElement.style.display = 'none';
}

// Controls
const keys = {};
document.addEventListener('keydown', e => {
    keys[e.code] = true;
});
document.addEventListener('keyup', e => {
    keys[e.code] = false;
});

// Mouse control
canvas.addEventListener('mousemove', e => {
    const rect = canvas.getBoundingClientRect();
    player.x = e.clientX - rect.left;
    player.y = e.clientY - rect.top;
});

restartBtn.addEventListener('click', restart);

// Start game
setInterval(createBlock, 1000);
gameLoop();