class GuessingGame {
    constructor() {
        this.rangeArr = [];
        this.maxIndex = null;
        this.minIndex = null;
        this.guessingNum = null;
    }

    setRange(min, max) {
        this.rangeArr.length = 0;
        if(min < max){
            this.maxIndex = max;
            this.minIndex = min;
            console.log("----setRange: ", this.maxIndex, this.minIndex, this.guessingNum);
        }
    }

    guess() {
        this.guessingNum = Math.round((this.maxIndex + this.minIndex) / 2);
        console.log("----guess: ", this.maxIndex, this.minIndex, this.guessingNum);
        return this.guessingNum;
    }

    lower() {
        this.maxIndex = this.guessingNum;
        console.log("----lower: ",this.maxIndex, this.minIndex, this.guessingNum);
    }

    greater() {
        this.minIndex = this.guessingNum;
        console.log("----greater: ", this.maxIndex, this.minIndex, this.guessingNum);
    }
}

module.exports = GuessingGame;
