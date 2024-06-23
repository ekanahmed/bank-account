class BankAccount {
    acoountNumber='Abc1234567778'
    acoountHolder='Ekaan Ahmed'
    acoountBalance=2000
    
    depositAmount(){
        this.acoountBalance += 1000
        console.log('You deposit 1000Rs.your current balance is ' + this.acoountBalance);
    }

    withdrawAmount(){
        this.acoountBalance -= 500
        console.log('You withdraw 500Rs.your current balance is ' + this.acoountBalance);
    }

    balanceleft(){
        console.log('You Balance amount is ' + this.acoountBalance);
    }
}

const myAccount = new BankAccount();
myAccount.depositAmount();
myAccount.withdrawAmount();
myAccount.balanceleft();