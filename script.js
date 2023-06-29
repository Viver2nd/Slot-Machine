// -------------------- KAI'S SLOT-MACHINE

// ---------- REMINDERS

// Apple = 1
// Banana = 2
// Orange = 3

// Game info
console.log(`Welcome to Kai's Slot-Machine!\n\nTo play, enter your wager amount and press the golden button.\n\nKEY:\n\n🍎 🍎 or 🍊 🍊 = wager x1.5\n\n🍌 🍌 = loss\n\n🍎 🍎 🍎 = wager x2.5\n\n🍊 🍊 🍊 = wager x2.0\n\n🍌 🍌 🍌= loss\n\nNone the same = loss`)
  
// ---------- VARIABLE DECLARATION

let slot1Val = ''; // Stores the value of slot1 i.e. 'Apple' 'Banana' or 'Orange'
let slot2Val = ''; // Stores the value of slot2 i.e. 'Apple' 'Banana' or 'Orange'
let slot3Val = ''; // Stores the value of slot3 i.e. 'Apple' 'Banana' or 'Orange'

let wagerAmount = ''; // Will store the amount wagered

let randSlot = Math.floor(Math.random() * 3); // Generates a random value for each slot

let balance = 500; // Change starting balance from this variable

let winnings = 0; // Will store the amount won from each spin

let withdrawArr = []; // Will store an array containing all previous amounts withdrawn

let largestWithdraw = 0; // Will store the largest withdraw
  
// ---------- CACHED ELEMENTS

// Slots
const slot1El = document.getElementById("slot1");
const slot2El = document.getElementById("slot2");
const slot3El = document.getElementById("slot3");

const spinEl = document.getElementById("spinButton");

// Buttons
const spinButton = document.getElementById("spinButton");

const doubleButton = document.getElementById("x2");
const halfButton = document.getElementById("half");

const withdrawButton = document.getElementById("withdraw");

const playAgainButton = document.getElementById("playAgain");

// Input boxes
const wagerInput = document.getElementById("wagerInput");

// Audio
const moneySoundEl = document.getElementById("moneySound");

// Messages
const msgEl = document.getElementById("msg");
msgEl.style.marginTop = '4.5vmin'
msgEl.innerText = `TO PLAY:\n\nENTER YOUR WAGER AMOUNT AND PRESS THE GOLDEN BUTTON!`

// Balance

const balanceEl = document.getElementById('balance');
balanceEl.innerText = `Balance: $${balance}`;

// Highscore

const highestWithdrawEl = document.getElementById("highestWithdraw");
highestWithdrawEl.innerText = `HIGHSCORE: $${largestWithdraw}`
  
// ---------- EVENT LISTENERS

spinEl.addEventListener('click', handleSpin);

doubleButton.addEventListener('click', handleDouble);

halfButton.addEventListener('click', handleHalf);

withdrawButton.addEventListener('click', handleWithdraw);

playAgainButton.addEventListener('click', handlePlayAgain);

// ---------- FUNCTIONS

function handleSpin() {

    wagerAmount = wagerInput.value;

    slot1Val = Math.floor(Math.random() * 3 + 1);
    slot2Val = Math.floor(Math.random() * 3 + 1);
    slot3Val = Math.floor(Math.random() * 3 + 1);

    // SLOT COMPARISON

    // Guard [Ensures the inputted wager amount is in the correct format, if it isn't it will prompt the user to input a number greater than zero]
    if (isNaN(wagerAmount) || wagerAmount === "" || wagerAmount === "0" || wagerAmount < 0) {
        msgEl.style.marginTop = '6vmin'
        msgEl.innerText='PLEASE ENTER A NUMBER GREATER THAN ZERO'
        console.log('Please enter a number greater than zero.');
        return;
    } else {
        // Guard [Ensures your balance is above zero, if it isn't it will tell the user to press '↺' to continue playing]
        if (balance < 0 || balance === 0) {
            msgEl.style.marginTop = '6vmin'
            msgEl.innerText=`YOU'RE OUT OF BALANCE... PRESS '↺' TO PLAY AGAIN`
            console.log(`You're out of balance... press '↺' to play again.`);
            return;
        // Guard [Ensures the user's balance can support the wager amount, if it can't it will prompt the user to lower their wager amount]
        } else if (wagerAmount > balance) {
            msgEl.style.marginTop = '6vmin'
            msgEl.innerText=`YOU DON'T HAVE ENOUGH BALANCE TO DO THIS`
            console.log(`You don't have enough balance to do this.`);
            return;
        // None the same
        } else if (slot1Val !== slot2Val && slot1Val !== slot3Val && slot2Val !== slot3Val) {
            msgEl.innerText='';
            winnings = wagerAmount * 0;
            balance = balance - wagerAmount;
            setTimeout(function() {
            msgEl.style.marginTop = '6vmin'
            balanceEl.innerText = `Balance: $${balance}`;
            wagerInput.value = '';
            msgEl.innerText=`YOU JUST LOST $${wagerAmount}`;
            }, 375);
        // All 🍎
        } else if (slot1Val === 1 && slot2Val === 1 && slot3Val === 1) {
            msgEl.innerText=''
            winnings = wagerAmount * 2.5;
            balance = balance + winnings;
            setTimeout(function() {
                msgEl.style.marginTop = '6vmin'
                balanceEl.innerText = `Balance: $${balance}`;
                wagerInput.value = '';
                msgEl.innerText=`YOU JUST WON $${winnings}`;
            }, 375);
        // All 🍌
        } else if (slot1Val === 2 && slot2Val === 2 && slot3Val === 2) {
            msgEl.innerText=''
            winnings = wagerAmount * 0;
            balance = balance - wagerAmount;
            setTimeout(function() {
                msgEl.style.marginTop = '6vmin'
                balanceEl.innerText = `Balance: $${balance}`;
                wagerInput.value = '';
                msgEl.innerText=`YOU JUST LOST $${wagerAmount}`
            }, 375)
        // All 🍊
        } else if (slot1Val === 3 && slot2Val === 3 && slot3Val === 3) {
            msgEl.innerText=''
            winnings = wagerAmount * 2;
            balance = balance + winnings;
            setTimeout(function() {
                msgEl.style.marginTop = '6vmin'
                balanceEl.innerText = `Balance: $${balance}`;
                wagerInput.value = '';
                msgEl.innerText=`YOU JUST WON $${winnings}`
            }, 375)
        // Two 🍌
        } else if (slot1Val === 2 && slot2Val === 2 || slot1Val === 2 && slot3Val === 2 || slot2Val === 2 && slot3Val === 2) {
            msgEl.innerText=''
            winnings = wagerAmount * 0;
            balance = balance - wagerAmount;
            setTimeout(function() {
                msgEl.style.marginTop = '6vmin'
                balanceEl.innerText = `Balance: $${balance}`;
                wagerInput.value = '';
                msgEl.innerText=`YOU JUST LOST $${wagerAmount}`
            }, 375)
        // Two 🍎 or 🍊
        } else if (slot1Val === slot2Val && slot1Val !== slot3Val) {
            msgEl.innerText=''
            winnings = wagerAmount * 1.5;
            balance = balance + winnings;
            setTimeout(function() {
                msgEl.style.marginTop = '6vmin'
                balanceEl.innerText = `Balance: $${balance}`;
                wagerInput.value = '';
                msgEl.innerText=`YOU JUST WON $${winnings}`
            }, 375)
        //  Two 🍎 or 🍊
        } else if (slot1Val === slot3Val && slot1Val !== slot2Val) {
            msgEl.innerText=''
            winnings = wagerAmount * 1.5;
            balance = balance + winnings;
            setTimeout(function() {
                msgEl.style.marginTop = '6vmin'
                balanceEl.innerText = `Balance: $${balance}`;
                wagerInput.value = '';
                msgEl.innerText=`YOU JUST WON $${winnings}`
            }, 375)
        //  Two 🍎 or 🍊
        } else if (slot2Val === slot3Val && slot2Val !== slot1Val) {
            msgEl.innerText='';
            winnings = wagerAmount * 1.5;
            balance = balance + winnings;
            setTimeout(function() {
                msgEl.style.marginTop = '6vmin'
                balanceEl.innerText = `Balance: $${balance}`;
                wagerInput.value = '';
                msgEl.innerText=`YOU JUST WON $${winnings}`
            }, 375)
        // Guard [Return if value is unexpected]
        } else {
            return;
        }
        
        // SLOT ICON ASSIGNMENT
        
        setTimeout(function() {
            if (slot1Val === 1) {
                slot1El.src="https://i.ibb.co/9rfhvRy/Apple.png";
            } else if (slot1Val === 2) {
                slot1El.src="https://i.ibb.co/56jrGLr/Banana.png";
            } else if (slot1Val === 3) {
                slot1El.src="https://i.ibb.co/9W8Whpt/Orange.png";
            } else {
                return;
            }
        }, 125)
        
        setTimeout(function() {
            if (slot2Val === 1) {
                slot2El.src="https://i.ibb.co/9rfhvRy/Apple.png";
            } else if (slot2Val === 2) {
                slot2El.src="https://i.ibb.co/56jrGLr/Banana.png";
            } else if (slot2Val === 3) {
                slot2El.src="https://i.ibb.co/9W8Whpt/Orange.png";
            } else {
                return;
            }
        }, 250)

        setTimeout(function() {
            if (slot3Val === 1) {
                slot3El.src="https://i.ibb.co/9rfhvRy/Apple.png";
            } else if (slot3Val === 2) {
                slot3El.src="https://i.ibb.co/56jrGLr/Banana.png";
            } else if (slot3Val === 3) {
                slot3El.src="https://i.ibb.co/9W8Whpt/Orange.png";
            } else {
                return;
            }
        }, 375)
    }
}

// x2 WAGER

function handleDouble() {
    wagerAmount = wagerInput.value;
    if (isNaN(wagerAmount) || wagerAmount === "" || wagerAmount === "0" || wagerAmount < 0) {
        msgEl.style.marginTop = '6vmin'
        msgEl.innerText='PLEASE ENTER A NUMBER GREATER THAN ZERO'
        console.log('Please enter a number greater than zero.')
        return;
    } else {
    msgEl.innerText=''
    wagerInput.value = wagerInput.value * 2;
    }
}

// 1/2 WAGER

function handleHalf() {
    wagerAmount = wagerInput.value;
    if (isNaN(wagerAmount) || wagerAmount === "" || wagerAmount === "0" || wagerAmount < 0) {
        msgEl.style.marginTop = '6vmin'
        msgEl.innerText='PLEASE ENTER A NUMBER GREATER THAN ZERO'
        console.log('Please enter a number greater than zero.')
        return;
    } else {
    msgEl.innerText=''
    wagerInput.value = wagerInput.value / 2;
    }
}

// CALCULATE HIGHEST AMOUNT WITHDRAWN

function highestWithdraw() {
    for (i = 0; i < withdrawArr.length; i++) {
        if (withdrawArr[i] > largestWithdraw) {
            largestWithdraw = withdrawArr[i]
        }
    }
    return largestWithdraw
}

// WITHDRAW FUNCTION

function handleWithdraw() {
    // Guard [Ensures you can't withdraw if your balance is equal to or less than 0]
    if (balance === 0 || balance < 0) {
        msgEl.style.marginTop = '6vmin'
        msgEl.innerText='YOU HAVE INSUFFICIENT FUNDS'
        console.log(`You have insufficient funds.`)
    } else {
        withdrawArr.push(balance)
        highestWithdraw()
        highestWithdrawEl.innerText = `HIGHSCORE: $${largestWithdraw}`
        moneySoundEl.play()
        msgEl.style.marginTop = '6vmin'
        msgEl.innerText=`YOU JUST WITHDREW $${balance}`
        console.log(`You just withdrew $${balance}`)
        balance = 0;
        balanceEl.innerText = `Balance: $${balance}`;
    }
}

// PLAY AGAIN FUNCTION

function handlePlayAgain() {
    balance = 500;
    balanceEl.innerText = `Balance: $${balance}`;
    msgEl.style.marginTop = '4.5vmin'
    msgEl.innerText = `TO PLAY:\n\nENTER YOUR WAGER AMOUNT AND PRESS THE GOLDEN BUTTON!`
    slot1El.src ="https://i.ibb.co/8gk4Ft7/Untitled.png"
    slot2El.src ="https://i.ibb.co/8gk4Ft7/Untitled.png"
    slot3El.src ="https://i.ibb.co/8gk4Ft7/Untitled.png"
    wagerInput.value = ''
}