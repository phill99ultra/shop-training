/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
class Money {
    constructor(amount, currency) {
        this.amount = amount,
        this.currency = currency        
    }
    toPOJO() {
        return {
            amount: this.amount,
            currency: this.currency           
        }
    }
    toJson() {
        return JSON.stringify(this.toPOJO())
    }
}

export default Money;

