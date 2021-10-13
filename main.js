const player1 = {
    name: 'Super Hero',
    hp: 320,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['меч', 'кирка', 'каска'],
    attack: function () {
        console.log(this.name + figth(this.name + 'Fight...'))
    },
};

const player2 = {
    name: 'Super Puper Hero',
    hp: 340,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['меч', 'топор', 'мааагия'],
    attack: function () {
        console.log(this.name + figth(this.name + 'Fight...'))
    },
};

let arenas = document.querySelector('.arenas');

function createPlayer(playerClass, playerNumber) {

    let $player1 = document.createElement('div');
    $player1.classList.add(playerClass);
    arenas.appendChild($player1);

        let innerDiv = document.createElement('div');
        innerDiv.classList.add('progressbar');
        $player1.appendChild(innerDiv);

            let lifeDiv = document.createElement('div');
            lifeDiv.classList.add('life');
            innerDiv.appendChild(lifeDiv);
            lifeDiv.style.width = 100 + '%';

            let nameDiv = document.createElement('div');
            nameDiv.classList.add('name');
            innerDiv.appendChild(nameDiv);
            nameDiv.innerText = playerNumber['name'];

        let characterDiv = document.createElement('div');
        characterDiv.classList.add('character');
        $player1.appendChild(characterDiv);

            let img = document.createElement('img');
            img.src = playerNumber['img'];
            characterDiv.appendChild(img);

}

createPlayer('player1', player1);
createPlayer('player2', player2);