let typesOfCards = [
    "bobrossparrot",
    "explodyparrot",
    "fiestaparrot",
    "metalparrot",
    "revertitparrot",
    "tripletsparrot",
    "unicornparrot"
];
let plays = 0;
let right = 0;
let decks = []
let numbersCards;
let firstCard;
let secondCard;
// //variaveis globais



startGame()
function startGame(){
    numbersCards =  Number(prompt("Escolha o numero de cartas de 4 a 14."))
    if (numbersCards > 14 || numbersCards < 4 || numbersCards === NaN || numbersCards === undefined || numbersCards%2 !== 0){
        alert("Por gentileza adicionar um valor numerico par de 4 a 14. Obrigado!!")
        startGame()
    }
    playGame()
}
function putCard(){
    
    
    for (let i = 0; i < numbersCards; i++) {
        
        document.querySelector('.table').innerHTML += `
        <li class="card" onclick="flipCard(this)" >
        <div class='front face'>
            <img src='./img/front.png'>
        </div>
        <div class='back face'>
            <img src='./img/${decks[i]}.gif'>
        </div>
        </li>
    `
    }
}
function flipCard(card){
    if (card.classList.contains('flip')) {
        return;
    }
    if (firstCard !== undefined && secondCard !== undefined) {
        return;
    }
    plays++
card.classList.add('flip')
if(firstCard === undefined){
    firstCard = card
}else if (secondCard === undefined){
    secondCard = card
}
if(firstCard.innerHTML === secondCard.innerHTML){
    firstCard = undefined;
    secondCard = undefined;
    right++
    endGame()

}else{
    setTimeout(backFlip, 1000)
}
}
function backFlip(){
    firstCard.classList.remove('flip')
    secondCard.classList.remove('flip')
    firstCard = undefined;
    secondCard = undefined;
}
function random() {
    return Math.random() - 0.5;
}
function playGame() {

    for (let i = 0; i < numbersCards / 2; i++) {
    let cards = typesOfCards[i];
    decks.push(cards);
    decks.push(cards);
    }
    decks.sort(random);
    putCard();
}
function endGame(){
    
    if(right === numbersCards/2 ){
        setTimeout(wingame,1000)
        function wingame(){
            alert(`Parabéns você ganhou em ${plays/2} jogadas`)
        }
        
    }
}