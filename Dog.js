class Dog {
    constructor(data) {
        Object.assign(this, data)
    }
    // name: "Teddy",
    // avatar: "images/dog-teddy.jpg",
    // age: 30,
    // bio: "How you doin?",
    // hasBeenSwiped: false,
    // hasBeenLiked: false
    setDogHtml() {
        const {name, avatar, age, bio} = this

        return `<div class="dog-data" id="${name}">
            <img id="img-dog" src="${avatar}" alt="${name}">
            <img src="images/badge-like.png" id="badge-like" class="badge hidden">
            <img src="images/badge-nope.png" id="badge-nope" class="badge hidden">
            <h1 id="dog-name">${name}, <span id="dog-age">${age}</span></h1>
            <p id="dog-desc">${bio}</p>
        </div>`
    }

    setLikeBadge() {
        let {hasBeenLiked, hasbeenSwiped} = this
        hasBeenLiked = true
        hasbeenSwiped = true
        document.getElementById('badge-nope').classList.add('hidden')        
        document.getElementById('badge-nope').classList.remove('show')
        document.getElementById('badge-like').classList.remove('hidden')
        document.getElementById('badge-like').classList.add('show')
    }

    setDislikeBadge() {
        let {hasBeenLiked, hasbeenSwiped} = this
        hasBeenLiked = false
        hasbeenSwiped = true
        document.getElementById('badge-nope').classList.remove('hidden')
        document.getElementById('badge-nope').classList.add('show')
        document.getElementById('badge-like').classList.remove('show')
        document.getElementById('badge-like').classList.add('hidden')
    }
}

export {Dog}