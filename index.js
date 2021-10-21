
function writeCards(names, event1) {
    
    let namesCopy = [];

    for (let i = 0; i < names.length; i++) {
        namesCopy.push(`Thank you, ${names[i]}, for the wonderful ${event1} gift!`);
    }
    return namesCopy;
}

function countDown(integer){
    while (integer >= 0) {
        console.log(integer--);
    }
}
