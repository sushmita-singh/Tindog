import dogs from "./data.js";
import {Dog} from "./Dog.js";

const dogArray = ["rex", "bella", "teddy"]

let currentDog = getNextDog()
const badgeLikeEl = document.getElementById('badge-like')
const badgeNopeEl = document.getElementById('badge-nope')
const likeBtn = document.getElementById('btn-like')
const dislikeBtn = document.getElementById('btn-dislike')

likeBtn.addEventListener('click', currentDog.setLikeBadge)
dislikeBtn.addEventListener('click', setDislikeBadge)

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

function setDislikeBadge() {
    currentDog.hasBeenLiked = true
    currentDog.hasbeenSwiped = true
    currentDog.document.getElementById('badge-nope').classList.add('hidden')        
    currentDog.document.getElementById('badge-nope').classList.remove('show')
    currentDog.document.getElementById('badge-like').classList.remove('hidden')
    currentDog.document.getElementById('badge-like').classList.add('show')
}

function setLikeBadge() {

}
render()