const SIZE = 20;
const boardElement = document.getElementById('board');
const messageElement = document.getElementById('message');
const countdownElement = document.getElementById('countdown');
const vsAICheckbox = document.getElementById('vsAI');

let currentPlayer, board, gameOver, timer, timeLeft;

function initBoard() {
    board = [];
    boardElement.innerHTML = '';
    for (let i = 0; i < SIZE; i++) {
        board[i] = [];
        for (let j = 0; j < SIZE; j++) {
            board[i][j] = '';
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.style.left = j * 30 + 'px';
            cell.style.top = i * 30 + 'px';
            cell.dataset.row = i;
            cell.dataset.col = j;
            boardElement.appendChild(cell);
        }
    }
}

function startGame() {
    currentPlayer = 'X';
    gameOver = false;
    messageElement.textContent = "Người chơi X bắt đầu!";
    initBoard();
    startTimer();
}

function restartGame() {
    clearInterval(timer);
    startGame();
    boardElement.style.pointerEvents = 'auto';
}

function startTimer() {
    timeLeft = 20;
    countdownElement.textContent = timeLeft;
    timer = setInterval(() => {
        timeLeft--;
        countdownElement.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            if (!gameOver) {
                messageElement.textContent = `⛔ Hết giờ! Người chơi '${currentPlayer}' thua lượt.`;
                gameOver = true;
                boardElement.style.pointerEvents = 'none';
            }
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timer);
    startTimer();
}

boardElement.addEventListener('click', function (e) {
    const cell = e.target;
    if (!cell.classList.contains('cell') || gameOver) return;

    const row = parseInt(cell.dataset.row);
    const col = parseInt(cell.dataset.col);

    if (board[row][col] !== '') return;

    board[row][col] = currentPlayer;
    cell.textContent = currentPlayer;

    if (checkWin(row, col, currentPlayer)) {
        gameOver = true;
        messageElement.textContent = `🎉 Người chơi '${currentPlayer}' thắng!`;
        boardElement.style.pointerEvents = 'none';
        highlightWin(row, col, currentPlayer);
        clearInterval(timer);
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        messageElement.textContent = `Lượt của '${currentPlayer}'`;
        resetTimer();

        if (vsAICheckbox.checked && currentPlayer === 'O') {
            setTimeout(AIMove, 300);
        }
    }
});

function AIMove() {
    // AI đơn giản: tìm ô trống đầu tiên
    for (let i = 0; i < SIZE; i++) {
        for (let j = 0; j < SIZE; j++) {
            if (board[i][j] === '') {
                const cell = document.querySelector(`.cell[data-row="${i}"][data-col="${j}"]`);
                cell.click();
                return;
            }
        }
    }
}

function checkWin(row, col, player) {
    const directions = [
        [0, 1],  // ngang
        [1, 0],  // dọc
        [1, 1],  // chéo \
        [1, -1]  // chéo /
    ];

    for (let [dx, dy] of directions) {
        let count = 1;
        let cells = [[row, col]];

        // Đếm về một phía
        let i = row + dx, j = col + dy;
        while (isValid(i, j) && board[i][j] === player) {
            count++;
            cells.push([i, j]);
            i += dx;
            j += dy;
        }

        // Đếm về phía ngược lại
        i = row - dx;
        j = col - dy;
        while (isValid(i, j) && board[i][j] === player) {
            count++;
            cells.push([i, j]);
            i -= dx;
            j -= dy;
        }

        if (count === 5) {
            // Kiểm tra chặn hai đầu (tùy chọn)
            const before = [row - dx, col - dy];
            const after = [row + dx * 5, col + dy * 5];

            const beforeBlocked = isValid(...before) && board[before[0]][before[1]] === getOpponent(player);
            const afterBlocked = isValid(...after) && board[after[0]][after[1]] === getOpponent(player);

            // Nếu bị chặn cả hai đầu thì không tính
            if (!(beforeBlocked && afterBlocked)) {
                highlightCells(cells);
                return true;
            }
        }
    }

    return false;
}

function isValid(i, j) {
    return i >= 0 && i < SIZE && j >= 0 && j < SIZE;
}

function getOpponent(p) {
    return p === 'X' ? 'O' : 'X';
}

function highlightCells(cells) {
    cells.forEach(([i, j]) => {
        const cell = document.querySelector(`.cell[data-row="${i}"][data-col="${j}"]`);
        cell.classList.add('winner');
    });
}

function countDirection(row, col, deltaRow, deltaCol, player) {
    let count = 0;
    let i = row + deltaRow;
    let j = col + deltaCol;

    while (i >= 0 && i < SIZE && j >= 0 && j < SIZE && board[i][j] === player) {
        count++;
        i += deltaRow;
        j += deltaCol;
    }

    return count;
}

function highlightWin(row, col, player) {
    const directions = [
        [0, 1], [1, 0], [1, 1], [1, -1]
    ];

    for (let [dx, dy] of directions) {
        let line = [[row, col]];
        let i = row + dx, j = col + dy;
        while (i >= 0 && i < SIZE && j >= 0 && j < SIZE && board[i][j] === player) {
            line.push([i, j]);
            i += dx;
            j += dy;
        }
        i = row - dx, j = col - dy;
        while (i >= 0 && i < SIZE && j >= 0 && j < SIZE && board[i][j] === player) {
            line.push([i, j]);
            i -= dx;
            j -= dy;
        }

        if (line.length >= 5) {
            line.forEach(([x, y]) => {
                const cell = document.querySelector(`.cell[data-row="${x}"][data-col="${y}"]`);
                cell.classList.add('winner');
            });
            break;
        }
    }
}

startGame();

