class character {
    constructor() {
        this.character = 'Default'
    }
    choose(character) {
        this.character = character
        localStorage.setItem('character', this.character)
    }
    get() {
        return localStorage.getItem('character')
    }
}

module.exports = new character()