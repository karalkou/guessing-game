class GuessingGame {
    constructor() {
        this.maxIndex = null;
        this.minIndex = null;
        this.guessingNum = null;
    }

    setRange(min, max) {
        if(min < max){
            this.maxIndex = max;
            this.minIndex = min;
        }
    }

    guess() {
        this.guessingNum = Math.round((this.maxIndex + this.minIndex) / 2);
        return this.guessingNum;
    }

    lower() {
        this.maxIndex = this.guessingNum;
    }

    greater() {
        this.minIndex = this.guessingNum;
    }
}

module.exports = GuessingGame;
