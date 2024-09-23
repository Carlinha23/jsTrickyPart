function createAccount(pin, amount = 0) {
    this.pin = pin;
    this.balance = amount;

    this.checkBalance = function (pin) {
        if (this.pin !== pin) {
            return 'Invalid PIN.';
        }
        return `$${this.balance}`; // Only return balance
    };

    this.deposit = function (pin, amount) {
        if (this.pin !== pin) {
            return 'Invalid PIN.';
        }
        this.balance += amount; // Correctly add to balance
        return `Successfully deposited $${amount}. Current balance: $${this.balance}.`;
    };

    this.withdraw = function (pin, amount) {
        if (this.pin !== pin) {
            return 'Invalid PIN.';
        }
        if (amount > this.balance) {
            return 'Withdrawal amount exceeds account balance. Transaction cancelled.';
        }
        this.balance -= amount; // Correctly subtract from balance
        return `Successfully withdrew $${amount}. Current balance: $${this.balance}.`;
    };

    this.changePin = function (oldPin, newPin) {
        if (this.pin !== oldPin) {
            return 'Invalid PIN.';
        }
        this.pin = newPin;
        return 'PIN successfully changed!';
    };
}




  //ex:
  let account = createAccount("1234", 100);

console.log(account.checkBalance("oops"));         
console.log(account.deposit("1234", 250));          
console.log(account.withdraw("1234", 300));         // "Successfully withdrew $300. Current balance: $50."
console.log(account.withdraw("1234", 10));          // "Successfully withdrew $10. Current balance: $40."
console.log(account.withdraw("1234", 100));         // "Withdrawal amount exceeds account balance. Transaction cancelled."
console.log(account.changePin("1234", "5678"));     // "PIN successfully changed!"
console.log(account.checkBalance("5678"));  
  
  module.exports = { createAccount };
  