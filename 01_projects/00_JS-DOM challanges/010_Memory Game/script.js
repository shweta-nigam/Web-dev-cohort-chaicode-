
// const  cards = document.querySelectorAll(".flip-card")
// const movesElement  = document.getElementById("moves")
// const timeElement = document.getElementById("time")
// const restartButton = document.getElementById("start-btn")

// // states of the game :

// let firstCard = null ; let secondCard = null;
// let hasCardFlipped = false
// let lockBoard = false 
// let moves = 0
// let timer = 0
// let timerInterval

// // shuffle cards
// function shuffleCards(){
//     const container = document.querySelector(".cards-container")
//     const arrayOfCards = Array.from(container.children)
//     // console.log( "my array of cards: " + arrayOfCards)
//     arrayOfCards.sort(()=> Math.random() - 0.5)      // minus 0.5 to get good sorting
//     container.innerHTML = "";
//    arrayOfCards.forEach((card) => container.appendChild(card));

// }
// shuffleCards()
// // flipping card on a click

// cards.forEach((card)=> card.addEventListener("click", flipCard))
// function flipCard(){

//     if(lockBoard || this === firstCard)return;    // this => card clicked / current context
//     const innerCard = this.querySelector(".flip-card-inner");
//     innerCard.classList.add("flip")

//     if(!hasCardFlipped){
//         firstCard = this;
//         hasCardFlipped = true
//     } else {
//         secondCard = this
//         checkMatch()
//     }
// }

// // matching the cards 
// function checkMatch(){
//     lockBoard = true;
//     moves++;
//     movesElement.textContent = moves

//     firstCard.querySelector(".flip-card-back").dataset.card ===
//     secondCard.querySelector(".flip-card-back").dataset.card;


//     if(matchCard){
//         disableCards()
//     } else {
//         setTimeout(unFlipCards,1000)
//     }
// }

// // disable cards to prevent flipping
// function disableCards(){
//     firstCard.removeEventListener("click", flipCard)
//     secondCard.removeEventListener("click", flipCard)
//     resetBoard()
// }

// function unFlipCards(){
//     firstCard.querySelector(".flip-card-inner").classList.remove("flip");
// secondCard.querySelector(".flip-card-inner").classList.remove("flip");

//     resetBoard()
// }

// function resetBoard(){
//     [firstCard, secondCard] = [null, null]
//     [hasCardFlipped, lockBoard] = [false, false]
// }

// // timer function
// function startTimer(){
//     timerInterval = setInterval(() => {
//         timer++
//         let minutes = Math.floor(timer/60)
//         let seconds  = timer % 60
//         timeElement.innerText = `${minutes}:${seconds < 10 ? "0" : ""}${seconds} `
//     }, 1000);
// }

// function stopTimer(){
//     clearInterval(timerInterval)
// }

// document.addEventListener("click",()=>{
//     if(!timerInterval)startTimer()
// },{once:true})

// restartButton.addEventListener("click",()=>{
//     cards.forEach((card)=> {card.classList.remove("flip")
//   card.addEventListener("click", flipCard)
//     })
//     moves = 0
//     timer = 0
//     movesElement.textContent = moves
//     timeElement.textContent = "0:00";
//     stopTimer()
//     timerInterval = null;
//     resetBoard();
//     shuffleCards();
// })
/*
// Note:-
1. for shuffling cards;
For small games like a Memory Card Game, this method works fine. However, for more robust shuffling, consider Fisher-Yates shuffle.
*/




const cards = document.querySelectorAll(".flip-card");
const movesElement = document.getElementById("moves");
const timeElement = document.getElementById("time");
const restartButton = document.getElementById("start-btn");

let firstCard = null;
let secondCard = null;
let hasCardFlipped = false;
let lockBoard = false;
let moves = 0;
let timer = 0;
let timerInterval;

// Shuffle Cards
function shuffleCards() {
    const container = document.querySelector(".cards-container");
    const arrayOfCards = Array.from(container.children);
    arrayOfCards.sort(() => Math.random() - 0.5);
    container.innerHTML = "";
    arrayOfCards.forEach((card) => container.appendChild(card));
}
shuffleCards();

// Flipping card on a click
cards.forEach((card) => card.addEventListener("click", flipCard));

function flipCard() {
    if (lockBoard || this === firstCard) return; // Prevent clicking same card
    this.querySelector(".flip-card-inner").classList.add("flip");

    if (!hasCardFlipped) {
        firstCard = this;
        hasCardFlipped = true;
    } else {
        secondCard = this;
        checkMatch();
    }
}

// Matching the cards
function checkMatch() {
    lockBoard = true;
    moves++;
    movesElement.textContent = moves;

    let matchCard = firstCard.querySelector(".flip-card-back").textContent === 
                    secondCard.querySelector(".flip-card-back").textContent;

    if (matchCard) {
        disableCards();
    } else {
        setTimeout(unFlipCards, 1000);
    }
}

// Disable matched cards
function disableCards() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
    resetBoard();
}

// Unflip unmatched cards
function unFlipCards() {
    firstCard.querySelector(".flip-card-inner").classList.remove("flip");
    secondCard.querySelector(".flip-card-inner").classList.remove("flip");
    resetBoard();
}

function resetBoard() {
    [firstCard, secondCard] = [null, null];
    [hasCardFlipped, lockBoard] = [false, false];
}

// Timer function
function startTimer() {
    timerInterval = setInterval(() => {
        timer++;
        let minutes = Math.floor(timer / 60);
        let seconds = timer % 60;
        timeElement.innerText = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

document.addEventListener("click", () => {
    if (!timerInterval) startTimer();
}, { once: true });

restartButton.addEventListener("click", () => {
    cards.forEach((card) => {
        card.querySelector(".flip-card-inner").classList.remove("flip");
        card.addEventListener("click", flipCard);
    });
    moves = 0;
    timer = 0;
    movesElement.textContent = moves;
    timeElement.textContent = "0:00";
    stopTimer();
    timerInterval = null;
    resetBoard();
    shuffleCards();
});
