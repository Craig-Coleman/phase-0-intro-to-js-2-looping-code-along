
const names = ["Conor", "JL", "Alicia"];

const event1 = "birthday";

function writeCards(names, event1) {
    
    const namesCopy = [...names];

    for (let i = 0; i < namesCopy.length; i++) {
        console.log(`Hello ${namesCopy[i]}, thank you so much for the ${event1}, gift!`)
    }

    return namesCopy;
}

writeCards(names, event1);



let number = 10

function countDown(number) {
    while (number >= 0) {
        console.log(number--);
    }
}

countDown(number);