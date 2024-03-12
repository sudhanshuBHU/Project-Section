const box = document.querySelectorAll('.box');
const newgame = document.querySelector('.newGame');
const heading = document.querySelector('.heading');
const win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
let grid = ["", "", "", "", "", "", "", "", ""];
let player;
function initialGame() {
    player = 'X';
    grid = ["", "", "", "", "", "", "", "", ""];
    box.forEach((b, i) => {
        b.classList = "box";
        b.innerHTML = "";
        b.style.pointerEvents = 'all';
    });
    newgame.classList.add('disappear');
    heading.innerHTML = `Current Player-${player}`;
}
function checkWin() {
    let res = "";
    win.forEach((pos) => {
        if ((grid[pos[0]] !== "" || grid[pos[1]] !== "" || grid[pos[2]] !== "") &&
            grid[pos[0]] === grid[pos[1]] && grid[pos[0]] === grid[pos[2]]) {
            res = grid[pos[0]] === 'X' ? 'X' : 'O';
            box[pos[0]].classList.add('aqua');
            box[pos[1]].classList.add('aqua');
            box[pos[2]].classList.add('aqua');
            box.forEach((b) => {
                b.style.pointerEvents = "none";
            });
        }

    });
    if (res !== "") {
        heading.innerHTML = `Winner is ${res}`;
        newgame.classList.remove('disappear');
        return;
    }
    let a = 0;
    grid.forEach((ele) => {
        if (ele !== "") a++;
    })
    if (a == 9) {
        heading.innerHTML = `Game Tie...`;
        newgame.classList.remove('disappear');
        return;
    }

}
function cre() {
    const credit = document.querySelector('.footer');
    let content = document.createElement('div');
    content.textContent = "Made By Sudhanshu Shekhar From BHU";
    credit.insertAdjacentElement('afterend', content);
    content.setAttribute("style","font-family:Courier New; margin-top:1rem;")
}

function swap() {
    player = (player === 'O') ? 'X' : 'O';
    heading.innerHTML = `Current Player-${player}`;
}
function handleClick(pos) {
    if (grid[pos] === "") {
        grid[pos] = player;
        box[pos].innerHTML = player;
        box[pos].style.pointerEvents = 'none';
        swap();
        checkWin();
    }
}
box.forEach((ele, pos) => {
    ele.addEventListener('click', () => {
        handleClick(pos);
    });
});
initialGame();
cre();
const reset = document.querySelector('.reset');
reset.addEventListener('click', () => {
    initialGame();
})
newgame.addEventListener('click', () => {
    initialGame();
})