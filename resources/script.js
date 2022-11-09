const favFood = ['lasagne', 'pizza', 'BBQ', 'steak', 'home made chips']
const favHobbies = ['going on family adventures', 'playing golf', 'going on caravan trips', 'going sailing', 'swimming at the beach']
const famNames = ['my wife Lee-Anne', 'eldest daughter Lucy', 'youngest daughter Daisy', 'son Jack', 'pet dog Oscar']

let outputFood = favFood[Math.floor(Math.random() * 5)];
let outputHobbies = favHobbies[Math.floor(Math.random() * 5)];
let outputNames = famNames[Math.floor(Math.random() * 5)];


const printResponse = console.log(`#Find out a little bit more about me here.
        *I live at home with ${outputNames} and some of my favourite food is ${outputFood}. 
        *In my free time I really look forward to ${outputHobbies}.`)



const meButton = document.getElementByID('me');

meButton.onclick = function() {
document.getElementById('me').InnerHTML = printResponse;
}

