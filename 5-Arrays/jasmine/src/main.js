let stack = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//Task 1
let position = 5;
let getItemResult = stack[position];
console.log(getItemResult)
//Task 2

position = 6;
replacementCard = 17; 
stack[position] = replacementCard;
console.log(stack[6])

//Task 3
let newCardTop = 25;
stack.unshift(newCardTop);

//Task 4
position = 8;
stack.slice(position, 1);

//Task 5
stack.shift(1);
//console.log(stack)

//Task 6
let newCardBottom = 18;
stack.push(newCardBottom);
//console.log(stack)

//Task 7
stack.pop();
console.log(stack)

//Task 8
let stackSize =5;
let checkSizeOfStackResult = true;
if(stackSize == stack.length){
    checkSizeOfStackResult = true;}
else{
    checkSizeOfStackResult = false;}
console.log(checkSizeOfStackResult)