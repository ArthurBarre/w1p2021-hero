class step {
    constructor() {
        this.step = localStorage.getItem('step') || 1
        localStorage.setItem('step', this.step)
    }
    set(step) {
        localStorage.setItem('step', step)
        this.step = step
    }
    get() {
        return localStorage.getItem('step')
    }
}

module.exports = new step()