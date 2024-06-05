// Array of inpsirational quotes 
const inspirationalQuotes = [
    'Opportunities don\'t happen, you create them.',
    'Patience is bitter, but it\'s fruit is sweet.',
    'Rome wasn\'t built in a day.',
    'There is nothing impossible, for those who will try.'
];

// Generate a random inspirational quote

for (let i = 0; i < Array.length; i++) {
    let randomNumber = Math.floor(Math.random() * 5);
  
    if(randomNumber === 1) {
        console.log(inspirationalQuotes[0]);

    } else if (randomNumber === 2) {
        console.log(inspirationalQuotes[1]);
    }
    else if (randomNumber === 3) {
        console.log(inspirationalQuotes[2]);
    }
    else if (randomNumber === 4) {
        console.log(inspirationalQuotes[3]);
    } else {
        console.log("Error. Please try again.");
        
    }
}