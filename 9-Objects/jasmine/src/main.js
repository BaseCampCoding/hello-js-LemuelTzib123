//Task 1 
let scoreBoard = {"The best Ever": 100000};

//Task 2
let newPlayerName = 'Lebron';
let newPlayerScore = 5000;
scoreBoard[newPlayerName] = newPlayerScore;
console.log(scoreBoard);

//Task 3
let playerToRemove = 'The Best Ever';
delete scoreBoard[playerToRemove];
console.log(scoreBoard);

//Task 4 
let playerNameToUpdate = 'Lebron';
let scoreToAdd = 1000;
scoreBoard[playerNameToUpdate] =+ scoreToAdd;
console.log(scoreBoard);



//Task 5 
let mondayBonus = 100;
for (let player in scoreBoard){
    scoreBoard[player] += mondayBonus;
}

console.log(scoreBoard);