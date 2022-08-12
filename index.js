import dogs from "./data.js";
import {Dog} from "./Dog.js";

const dogArray = ["rex", "bella", "teddy"]
const likedArray = []

let currentDog = getNextDog()
// const badgeLikeEl = document.getElementById('badge-like')
// const badgeNopeEl = document.getElementById('badge-nope')
const likeBtn = document.getElementById('btn-like')
const dislikeBtn = document.getElementById('btn-dislike')
const tryAgainBtn = document.getElementById('try-again')

likeBtn.addEventListener('click', function() {
    currentDog.setLikeBadge()
    likedArray.push(currentDog)
    loadNextDog()
})
dislikeBtn.addEventListener('click', function() {
    currentDog.setDislikeBadge()
    loadNextDog()
})
tryAgainBtn.addEventListener('click', reset)

function reset() {
    console.log("button clicked")
    dogArray = ["rex", "bella", "teddy"]
    likedArray = []
    currentDog = getNextDog()
    render()
}

function render() {
    document.getElementById('main').innerHTML = currentDog.setDogHtml()
}

function getNextDog() {
    if(dogArray.length > 0) {
        let currentDog = dogArray.shift()
        return new Dog(dogs[currentDog])
    } else {
        return {}
    }
}

function loadNextDog() {
    disableButtons()
    setTimeout(()=>{
        if( dogArray.length > 0) {
            currentDog = getNextDog()
            enableButtons()
            render()
        } else {
            showResult()
        }
    },500)
}

function disableButtons() {
    likeBtn.classList.remove('show')
    dislikeBtn.classList.remove('show')
    likeBtn.classList.add('hidden')
    dislikeBtn.classList.add('hidden')
}

function enableButtons() {
    likeBtn.classList.remove('hidden')
    dislikeBtn.classList.remove('hidden')
    likeBtn.classList.add('show')
    dislikeBtn.classList.add('show')
}

function showResult() {
        if(likedArray.length > 0) {
            let index = Math.floor(Math.random() * likedArray.length)
            console.log(index)
            console.log(likedArray[index])
            document.getElementById('main').innerHTML = `<div class="result">
                    <h1>You are matched with <span class = "ascent">${likedArray[index].name}</span></h1>
                    <div class = "show-match">
                        <img class="match self" src="images/dog-profile.jpg">                
                        <img class="match partner" src="${likedArray[index].avatar}">
                    <div>
                </div>
                `
        } else {
            document.getElementById('main').innerHTML = `<div class="result">
                    <h1>You are not matched with anyone</h1>
                </div>
                `
                
                // <img src="images/try-again.jpg" id = "try-again">
                    // <button id="try-again" class="show">Try Again!</button>
        }
}

render()