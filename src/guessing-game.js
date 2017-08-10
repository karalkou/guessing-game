class GuessingGame {
    constructor() {
        this.rangeArr = [];
        this.maxIndex = null;
        this.minIndex = null;
        this.guessingNum = null;
    }

    setRange(min, max) {
        /* some logic */
    }

    guess() {
        /* some logic */
        return this.guessingNum;
    }

    lower() {
        this.maxIndex = this.guessingNum;
    }

    greater() {
        this.minIndex = this.guessingNum;
    }

    someLogic(arr, data){
        let upperBound = arr.length-1;
        let lowerBound = 0;
        while (lowerBound <= upperBound) {
            let mid = Math.floor((upperBound + lowerBound) / 2);
            if (arr[mid] < data) {
                lowerBound = mid + 1;
            }
            else if (arr[mid] > data) {
                upperBound = mid - 1;
            }
            else {
                return mid;
            }
        }
        return -1;
    }
}

module.exports = GuessingGame;
