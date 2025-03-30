const background = document.getElementById('background');

function spawnCube() {
    const cube = document.createElement('div');
    cube.className = 'cube';
    cube.style.left = `${Math.random() * 100}vw`;
    cube.style.top = `${Math.random() * 100}vh`;
    cube.style.animationDuration = `${4 + Math.random() * 6}s`;

    const size = Math.random() < 0.2 ? 60 + Math.random() * 60 : 10 + Math.random() * 30;
    cube.style.width = cube.style.height = `${size}px`;

    background.appendChild(cube);

    setTimeout(() => background.removeChild(cube), 10000);
}

setInterval(spawnCube, 50);