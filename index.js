// Code your solutions in this file
//writecards
const nameArray = []
function writeCards(nameArray, surpriseItem) {
    let thankYouMessages = [] // returns an array of ty messages

    for (let i = 0; i<nameArray.length; i++) {
        thankYouMessages.push(`Thank you, ${nameArray[i]}, for the wonderful ${surpriseItem} gift!`);
    }
    // console.log(thankYouMessages)
    return thankYouMessages;
}

// countdown
function countDown ( startNumber ) {
    while (startNumber > 0) {
        // invoke console. log, 10 invokes 11, --
        console.log (startNumber);// logs each argument fed- startNumber. 
        startNumber = startNumber -1; // from the start to go down to 0
    }
    console.log (startNumber);
}

// const address = {
//     name: "P. Sherman",
//     street2: "42 Wallaby Way",
//     city: "Sydney",
//     state: "New South Whales",
//     country: "AUS",
//   };

//   for (const key in address) {
//     console.log(address[key]);
//   }