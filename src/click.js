let score = 0;
let timer = 0;

function startGame() {
    document.getElementById('score').style.display = 'none';
    document.getElementById('target').innerText = 'Click me!';
    document.getElementById('try-again').style.display = 'none';
    clearScore();
    moveTarget();
    timer = setTimeout(stopGame, 5000); // 5-second timer
}

function stopGame() {
    clearTimeout(timer); // Move clearTimeout to the beginning
    document.getElementById('score').innerText = `Score: ${score}`;
    document.getElementById('score').style.display = 'block';
    document.getElementById('target').innerText = 'Game Over';
    document.getElementById('try-again').style.display = 'block';
    clearScore(score);
}

function clearScore() {
    score = 0;
}

function handleClick() {
    if (timer) {
        score++;
        document.getElementById('score').style.display = 'block';
        updateScore();
        moveTarget();
    }
}

function moveTarget() {
    const target = document.getElementById('target');
    const maxX = window.innerWidth - target.clientWidth;
    const maxY = window.innerHeight - target.clientHeight;

    const newX = Math.floor(Math.random() * maxX);
    const newY = Math.floor(Math.random() * maxY);

    target.style.left = `${newX}px`;
    target.style.top = `${newY}px`;
}

function updateScore() {
    document.getElementById('score-value').innerText = score;
}
