// -------------------- KAI'S SLOT-MACHINE

// ---------- REMINDERS

// Apple = 1
// Banana = 2
// Orange = 3

// Game info
console.log(`Welcome to Kai's Slot-Machine!\n\nTo play, enter your wager amount and press the golden button.\n\nKEY:\n\n🍎 🍎 or 🍊 🍊 or 🍌 🍌 = wager x1.5\n\n🍎 🍎 🍎 = wager x2.5\n\n🍊 🍊 🍊 = wager x2.0\n\n🍌 🍌 🍌= loss\n\nNone the same = loss`)
  
// ---------- VARIABLE DECLARATION
let slot1Val = '';
let slot2Val = '';
let slot3Val = '';

let wagerAmount = '';

let randSlot = Math.floor(Math.random() * 3);

let balance = 0;

let winnings = 0;
  
// ---------- CACHED ELEMENTS

// Slots
const slot1El = document.getElementById("slot1");
const slot2El = document.getElementById("slot2");
const slot3El = document.getElementById("slot3");

const spinEl = document.getElementById("spinButton");

const balanceEl = document.getElementById('balance')

// Buttons
const spinButton = document.getElementById("spinButton");

const doubleButton = document.getElementById("x2")
const halfButton = document.getElementById("half")

const withdrawButton = document.getElementById("withdraw")

// Input boxes
const wagerInput = document.getElementById("wagerInput")

// Audio
const moneySoundEl = document.getElementById("moneySound")

// Messages
const msgEl = document.getElementById("msg")
  
// ---------- EVENT LISTENERS
spinEl.addEventListener('click', handleSpin);

doubleButton.addEventListener('click', handleDouble);

halfButton.addEventListener('click', handleHalf);

withdrawButton.addEventListener('click', handleWithdraw);

// ---------- FUNCTIONS
function handleSpin() {

    wagerAmount = wagerInput.value;

    slot1Val = Math.floor(Math.random() * 3 + 1);
    slot2Val = Math.floor(Math.random() * 3 + 1);
    slot3Val = Math.floor(Math.random() * 3 + 1);

    // Slot comparison

    // Guard [Ensures the inputted wager amount is a number, if it isn't the game won't proceed]
    if (isNaN(wagerAmount) || wagerAmount === "" || wagerAmount === "0" || wagerAmount < 0) {
        msgEl.innerText='PLEASE ENTER A NUMBER GREATER THAN ZERO'
        console.log('Please enter a number greater than zero.')
        return;
    } else {
        // Zero the same
        if (slot1Val !== slot2Val && slot1Val !== slot3Val && slot2Val !== slot3Val) {
            msgEl.innerText=''
            winnings = wagerAmount * 0;
            balance = balance - wagerAmount;
            setTimeout(function() {
            balanceEl.innerText = `Balance: $${balance}`;
            wagerInput.value = '';
            msgEl.innerText=`YOU JUST LOST $${wagerAmount}`
            }, 375)
        // All 🍎
        } else if (slot1Val === 1 && slot2Val === 1 && slot3Val === 1) {
            msgEl.innerText=''
            winnings = wagerAmount * 2.5;
            balance = balance + winnings;
            setTimeout(function() {
                balanceEl.innerText = `Balance: $${balance}`;
                wagerInput.value = '';
                msgEl.innerText=`YOU JUST WON $${winnings}`
            }, 375)
        // All 🍌
        } else if (slot1Val === 2 && slot2Val === 2 && slot3Val === 2) {
            msgEl.innerText=''
            winnings = wagerAmount * 0;
            balance = balance - wagerAmount;
            setTimeout(function() {
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
                balanceEl.innerText = `Balance: $${balance}`;
                wagerInput.value = '';
                msgEl.innerText=`YOU JUST WON $${winnings}`
            }, 375)
        // Two the same
        } else if (slot1Val === slot2Val && slot1Val !== slot3Val) {
            msgEl.innerText=''
            winnings = wagerAmount * 1.5;
            balance = balance + winnings;
            setTimeout(function() {
                balanceEl.innerText = `Balance: $${balance}`;
                wagerInput.value = '';
                msgEl.innerText=`YOU JUST WON $${winnings}`
            }, 375)
        // Two the same
        } else if (slot1Val === slot3Val && slot1Val !== slot2Val) {
            msgEl.innerText=''
            winnings = wagerAmount * 1.5;
            balance = balance + winnings;
            setTimeout(function() {
                balanceEl.innerText = `Balance: $${balance}`;
                wagerInput.value = '';
                msgEl.innerText=`YOU JUST WON $${winnings}`
            }, 375)
        // Two the same
        } else if (slot2Val === slot3Val && slot2Val !== slot1Val) {
            msgEl.innerText='';
            winnings = wagerAmount * 1.5;
            balance = balance + winnings;
            setTimeout(function() {
                balanceEl.innerText = `Balance: $${balance}`;
                wagerInput.value = '';
                msgEl.innerText=`YOU JUST WON $${winnings}`
            }, 375)
        // Guard [Return if value is unexpected]
        } else {
            return;
        }
        
        // Slot icon assignment
        
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

// Double function

function handleDouble() {
    wagerAmount = wagerInput.value;
    if (isNaN(wagerAmount) || wagerAmount === "" || wagerAmount === "0" || wagerAmount < 0) {
        msgEl.innerText='PLEASE ENTER A NUMBER GREATER THAN ZERO'
        console.log('Please enter a number greater than zero.')
        return;
    } else {
    msgEl.innerText=''
    wagerInput.value = wagerInput.value * 2;
    }
}

// Half function

function handleHalf() {
    wagerAmount = wagerInput.value;
    if (isNaN(wagerAmount) || wagerAmount === "" || wagerAmount === "0" || wagerAmount < 0) {
        msgEl.innerText='PLEASE ENTER A NUMBER GREATER THAN ZERO'
        console.log('Please enter a number greater than zero.')
        return;
    } else {
    msgEl.innerText=''
    wagerInput.value = wagerInput.value / 2;
    }
}

// Withdraw function

function handleWithdraw() {
    // Guard [Ensures you can't withdraw if your balance is equal to or less than 0]
    if (balance === 0 || balance < 0) {
        msgEl.innerText='YOU HAVE INSUFFICIENT FUNDS'
        console.log(`You have insufficient funds.`)
    } else {
        moneySoundEl.play()
        msgEl.innerText=`YOU JUST WITHDREW $${balance}`
        console.log(`You just withdrew $${balance}`)
        balance = 0;
        balanceEl.innerText = 'Balance: $0'
    }
}