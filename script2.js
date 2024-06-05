// Three arrays containing verbs, adjectives and nouns

const verbs = ['Drink Tea', 'Go Skiing', 'Go Shopping', 'Dance All Night', 'Make Silly Faces'];
const adjectives = ['Joyfully', 'Masterfully', 'Robotically', 'Beautifully', 'Surprisingly'];
const nouns = ['In London', 'In Zermat', 'In New York', 'In Milan'];

// User asks the program a question

console.log('Hello. What should I do today?\n');

// The following three arrays each generate a string 
// Thus displaying a final message to the user

for (let i = 0; i < Array.length; i++) {
    let randomVerb = Math.floor(Math.random() * 5);
    switch (randomVerb) {
        case 1: 
            console.log('Drink Tea');
            break;
        case 2: 
            console.log('Go Skiing');
            break;
        case 3:
            console.log('Go Shopping');
            break;
        case 4:
            console.log('Dance All Night');
            break;
        case 4:
            console.log('Make Silly Faces');
            break;
        default:
            console.log('Float...');
            break;
    }
}

for (let i = 0; i < Array.length; i++) {
    let randomAdj = Math.floor(Math.random() * 6);
    switch (randomAdj) {
        case 1: 
            console.log('Joyfully');
            break;
        case 2: 
            console.log('Masterfully');
            break;
        case 3:
            console.log('Robotically');
            break;
        case 4:
            console.log('Beautifully');
            break;
        case 4:
            console.log('Surprisingly');
            break;
        default:
            console.log('Effortlessly');
            break;
    }
}

for (let i = 0; i < Array.length; i++) {
    let randomNoun = Math.floor(Math.random() * 4);
    switch (randomNoun) {
        case 1: 
            console.log('In London');
            break;
        case 2: 
            console.log('In Zermat');
            break;
        case 3:
            console.log('In New York');
            break;
        case 4:
            console.log('In Milan');
            break;
        default:
            console.log('In Space');
            break;
    }
}
