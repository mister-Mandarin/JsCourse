const player1 = {
    player: 1,
    name: 'Super Hero',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['меч', 'кирка', 'каска'],
    attack: function () {
        console.log(this.name + figth(this.name + 'Fight...'))
    },
};
const player2 = {
    player: 2,
    name: 'Super Puper Hero',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['меч', 'топор', 'мааагия'],
    attack: function () {
        console.log(this.name + figth(this.name + 'Fight...'))
    },
};

let arenas = document.querySelector('.arenas');
let button = document.querySelector('.button');

function createDivClass(element, classElement) {
    let elem = document.createElement(element);
    if (classElement) {
        elem.classList.add(classElement);
    }

    return elem;
};

function createPlayer(playerNumber) {

    let player = createDivClass('div', 'player' + playerNumber.player);

    let innerDiv = createDivClass('div', 'progressbar');
    player.appendChild(innerDiv);

    let lifeDiv = createDivClass('div', 'life');
    innerDiv.appendChild(lifeDiv);
    lifeDiv.style.width = 100 + '%';

    let nameDiv = createDivClass('div', 'name');
    innerDiv.appendChild(nameDiv);
    nameDiv.innerText = playerNumber['name'];

    let characterDiv = createDivClass('div', 'character');
    player.appendChild(characterDiv);

    let img = createDivClass('img');
    img.src = playerNumber['img'];
    characterDiv.appendChild(img);

    return player;
};

function damage() {
    let damage = Math.ceil(Math.random() * 20);
    return damage;
}

function changeHP(player) {
    const playerLife = document.querySelector('.player' + player.player + ' .life');

    player.hp -= damage();
    playerLife.style.width = player.hp + '%';
    console.log(player.hp);

    if (player.hp <= 0) {
        playerLife.style.width = 0 + '%'; //обнуляем полоску хп
        player.hp = 0; // обнуляем значение хп. Если удар был первого игрока, то у второго есть шанс сделать ничью
    };

    return player.hp;
};

function playerWin(name) {
    button.classList.toggle('buttonHidden'); //прячем кнопку
    let titleWin = createDivClass('div', 'loseTitle');
    if (name === 'draw') {
        titleWin.innerText = '🏆 DRAW 🏆';
    } else titleWin.innerText = name + ' WINNER 🏆🏆🏆';
    return titleWin;
}

function win(player1, player2) {
    if (player1.hp > player2.hp) {
        arenas.appendChild(playerWin(player1.name));
    } else if (player1.hp < player2.hp) {
        arenas.appendChild(playerWin(player2.name));
    } else arenas.appendChild(playerWin('draw'));
}

button.addEventListener('click', function () {
    let player1HP = changeHP(player1);
    let player2HP = changeHP(player2);

    if (player1HP <= 0 || player2HP <= 0) {
        win(player1, player2);
    };
});

arenas.appendChild(createPlayer(player1));
arenas.appendChild(createPlayer(player2));