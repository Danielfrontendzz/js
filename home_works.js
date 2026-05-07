window.onload = () => {
    const emailInput = document.getElementById('email');
    const emailResult = document.getElementById('emailResult');
    const re = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if (emailInput) {
        emailInput.oninput = () => {
            if (re.test(emailInput.value)) {
                emailResult.innerHTML = 'VALID';
                emailResult.style.color = 'green';
            } else {
                emailResult.innerHTML = 'INVALID';
                emailResult.style.color = 'red';
            }
        };
    }

    const childBlock = document.querySelector('.child_block');
    const parentBlock = document.querySelector('.parent_block');

    if (childBlock && parentBlock) {
        let positionX = 0;
        let positionY = 0;
        const offsetWidth = parentBlock.clientWidth - childBlock.clientWidth;
        const offsetHeight = parentBlock.clientHeight - childBlock.clientHeight;

        function moveSquare() {
            if (positionX < offsetWidth && positionY === 0) {
                positionX += 2;
                childBlock.style.left = `${positionX}px`      ;
            } else if (positionX >= offsetWidth && positionY < offsetHeight) {
                positionY += 2;
                childBlock.style.top = `${positionY}px`;
            } else if (positionX > 0 && positionY >= offsetHeight) {
                positionX -= 2;
                childBlock.style.left = `${positionX}px`;
            } else if (positionX === 0 && positionY > 0) {
                positionY -= 2;
                childBlock.style.top = `${positionY}px`;
            }
            requestAnimationFrame(moveSquare);
        }
        moveSquare();
    }

    let timer = 0;
    let interval = null;
    const secondsDisplay = document.getElementById('seconds');
    const startBtn = document.getElementById('start');
    const stopBtn = document.getElementById('stop');
    const resetBtn = document.getElementById('reset');

    if (secondsDisplay && startBtn) {
        startBtn.onclick = () => {
            if (!interval) {
                interval = setInterval(() => {
                    timer++;
                    secondsDisplay.innerText = timer;
                }, 1000);
            }
        };

        stopBtn.onclick = () => {
            clearInterval(interval);
            interval = null;
        };

        resetBtn.onclick = () => {
            clearInterval(interval);
            interval = null;
            timer = 0;
            secondsDisplay.innerText = timer;
        };
    }
};
