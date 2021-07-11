class account {
    constructor(name, password, balance){
        this.name = name;
        this.password = password;
        this.balance = balance;
    }
}

class ATM{
    constructor(){
        this.current = null;
        this.account = [];
        this.account.push(new account("sam","bucks",5000));
        this.account.push(new account("will","bigbank",5000));
        this.account.push(new account("jerry","bucks",5000));
    }


    register(){
        let userName = prompt("Please input a name for the new account");
        let password = prompt("Please input a password");
        let newAccount = new account(userName, password, 0);
        this.account.push(newAccount);
        console.log(this.account);
    }


    login() {
        let userName = prompt("Please input a user name");
        let password = prompt("Please input a password");
        //console.log(this.accounts);
        //console.log(this.current === null);
        if (this.current === null) {
            for (let i = 0; i < this.account.length; i++) {
                let account = this.account[i];
                //check both the username and password combo
                console.log(account.name === userName && account.password === password);
                if (account.name === userName && account.password === password) {
                    //by setting current, we "log" the user in
                    this.current = account;
                    console.log(`${userName} has successfully logged in`)
                    break;
                }
                else if (i === this.account.length - 1) {
                    console.log(`no account with the user name: ${userName} and password ${password} was found`);
                }
            }

        }
        else {
            console.log("Someone else is currently logged in, please log out before try to login into another account");
        }
    }

    logout() {
        if (this.current !== null) {
            console.log(`logging out ${this.current.name}`)
            this.current = null;
        }
        else {
            console.log("No one has logged out since no one is logged in")
        }
    }

    checkBalance() {
        if (this.current !== null) {
            console.log(`${this.current.name}'s balance is ${this.current.balance}`)
        }
        else {
            console.log("No one is currently logged in, so no balance can be printed");
        }
    }

    deposit(amount) {
        if (this.current !== null) {
            this.current.balance += amount;
            console.log(`${amount} has been added to the account`);
            this.checkBalance();
        }
        else {
            console.log("No user is currenlty logged in, so nothing can be desposited")
        }
    }

    withdraw(amount) {
        if (this.current !== null) {
            if (amount <= this.current.balance) {
                this.current.balance -= amount;
                this.checkBalance();
            }
            else {
                console.log(`${amount} is too large given the current balance is ${this.current.balance}`)
            }
        }
        else {
            console.log("no user is logged in, so I can't give you the money")
        }
    }
}
let a = new account("jerome", "bank", 1000);
let atm = new ATM();
atm.account.push(a);


function register_t() {
    atm.register();
}

function withdraw_t() {
    atm.withdraw(500);
}

function login_t() {
    atm.login();
}

function logout_t() {
    atm.logout();
}

function checkBalance_t() {
    atm.checkBalance();
}

function deposit_t() {
    atm.deposit();
}


//atm.logout();