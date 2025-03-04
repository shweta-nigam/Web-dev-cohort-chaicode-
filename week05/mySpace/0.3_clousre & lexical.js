// Lexical Scope Example:
// 👨 Dad (outer function) has a wallet.
// 👦 Son (inner function) can access dad’s wallet while inside the house.
// 🚪 But once dad leaves the house, the son can’t access it anymore.

function dad(){
    let wallet = " 💰Dad's wallet"

    function son(){
        console.log(wallet)    // son can access the wallet of the dad
    }
    son()        // works because of the lexical scope
}
dad()
console.log(wallet)       // ❌ Error! dad's wallet is not available globally


// Closure Example:
// 👦 Son (inner function) steals dad’s wallet and keeps it in his pocket even after leaving the house.
// 😂 Now he can use the money even when dad is gone!

function dad(){
    let wallet = " 💰Dad's wallet"

    function son(){
          console.log(wallet)
    }
    son()
}
 
const walletTaken = dad      // Son leaves the house (outer function runs and exits)
walletTaken()               // "💰 Dad's Wallet" (He still has access)


///++++++++++++
// How is this Different from a Closure?
// If you returned son instead of calling it inside dad, you would create a closure:

function dad(){
    let wallet = "💰 Dad's Wallet"

    return function son(){               // Returning function instead of calling it
        console.log(wallet)
    }
}

const walletAccess = dad()      // Now, dad() runs, but doesn't call son()
walletAccess()                 // 💰Dad's wallet (son() remembers wallet even after dad() finishes)