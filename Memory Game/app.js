const cardArray = [
  {
    name: 'Froakie',
    img: 'imgs/Froakie.png'
  },
  {
    name: 'Mudkip',
    img: 'imgs/Mudkip.png'
  },
  {
    name: 'Oshawott',
    img: 'imgs/Oshawott.png'
  },
  {
    name: 'Piplup',
    img: 'imgs/Piplup.png'
  },
  {
    name: 'Popplio',
    img: 'imgs/Popplio.png'
  },
  {
    name: 'Sobble',
    img: 'imgs/Sobble.png'
  },
  {
    name: 'Squirtle',
    img: 'imgs/Squirtle.png'
  },
  {
    name: 'Totodile',
    img: 'imgs/Totodile.png'
  },
  {
    name: 'Froakie',
    img: 'imgs/Froakie.png'
  },
  {
    name: 'Mudkip',
    img: 'imgs/Mudkip.png'
  },
  {
    name: 'Oshawott',
    img: 'imgs/Oshawott.png'
  },
  {
    name: 'Piplup',
    img: 'imgs/Piplup.png'
  },
  {
    name: 'Popplio',
    img: 'imgs/Popplio.png'
  },
  {
    name: 'Sobble',
    img: 'imgs/Sobble.png'
  },
  {
    name: 'Squirtle',
    img: 'imgs/Squirtle.png'
  },
  {
    name: 'Totodile',
    img: 'imgs/Totodile.png'
  },
]

cardArray.sort(()=> 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result');
const hintDisplay = document.querySelector('#hint');
let cardChosen = [];
let cardChosenIds = [];
const cardsWon = [];

function createCard(){
  for(let i = 0; i < cardArray.length; i++){
    const card = document.createElement('img');
    card.setAttribute('src','imgs/Pokeball.png');
    card.setAttribute('data-id',i);
    card.addEventListener('click',flipCard);
    gridDisplay.appendChild(card);
  }
}

createCard();

function changeHint (text){
  hintDisplay.innerText = text;
}


function checkMatch(){
  const cards = document.querySelectorAll('img');
  const optionOneId = cardChosenIds[0]
  const optionTwoId = cardChosenIds[1]

  if (optionOneId == optionTwoId){
    // alert('You have clicked the same image!')
    cards[optionOneId].setAttribute('src','imgs/Pokeball.png');
    cards[optionTwoId].setAttribute('src','imgs/Pokeball.png');
  } else if (cardChosen[0] == cardChosen[1]) {
    // alert('You found a Match!');
    cards[optionOneId].setAttribute('src','imgs/white.png');
    cards[optionTwoId].setAttribute('src','imgs/white.png');
    cards[optionOneId].removeEventListener('click',flipCard);
    cards[optionTwoId].removeEventListener('click',flipCard);
    cardsWon.push(cardChosen)
  } else {
    cards[optionOneId].setAttribute('src','imgs/Pokeball.png');
    cards[optionTwoId].setAttribute('src','imgs/Pokeball.png');
    // alert('Sorry, try again!');
  }

  resultDisplay.textContent = cardsWon.length
  cardChosen = [];
  cardChosenIds = [];

  if (cardsWon.length === cardArray.length/2) {
    resultDisplay.innerHTML = "Congratulations! You have catch'em all!"
  }
}

function flipCard(){
  const cardId = this.getAttribute('data-id');
  cardChosen.push(cardArray[cardId].name);
  cardChosenIds.push(cardId);
  console.log(cardChosen);
  console.log(cardChosenIds);
  this.setAttribute('src',cardArray[cardId].img)
  if(cardChosen.length === 2){
    setTimeout(checkMatch, 200)
  }
}