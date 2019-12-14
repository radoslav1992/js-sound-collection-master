window.addEventListener('load', () => {
    const tracks = document.querySelectorAll('.sound');
    const containers = document.querySelectorAll('.containers div');
    const visual = document.querySelector('.visual');
    const colors = [
    '#3a1ce7',
    '#d11717',
    '#13b82f',
    '#c71fd6',
    '#d11899',
    '#14759b'
    ];

    containers.forEach((container, index) => {
        container.addEventListener('click', function() {
            tracks[index].currentTime = 0;
            tracks[index].play();
            createJumpingBalls(index);
        });
    });

    const createJumpingBalls = (index) => {
        const ball = document.createElement('div');
        visual.appendChild(ball);
        ball.style.backgroundColor = colors[index]
        ball.style.animation = 'jump 1s ease';
        ball.addEventListener('animationend', function() {
            visual.removeChild(this)
        });
    };
});