export default class TransactionModel {
    constructor(customerId, description, date, inAmount, outAmount, balance) {
        this.customerId = customerId,
        this.description = description, 
        this.date = date,
        this.inAmount = inAmount,
        this.outAmount =  outAmount, 
        this.balance = balance
    }
  }
  