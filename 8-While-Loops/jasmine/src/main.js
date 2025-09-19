let juiceName = "Energizer";
let timeToMixJuiceResult;

if (juiceName == "Pure Strawberry Joy") {
  timeToMixJuiceResult = 0.5;
}

else if (juiceName == "Energizer" || juiceName == "Green Garden") {
timeToMixJuiceResult = 1.5;
}

else if (juiceName == "Tropical Island") {
timeToMixJuiceResult = 3;
}

else if (juiceName == "All or Nothing") {
timeToMixJuiceResult = 5;
}

else{timeToMixJuiceResult = 2.5;}

console.log(timeToMixJuiceResult);

//Task 2 
let wedgesNeeded = 120;
limes = ["small", "large", "medium", "large", "small"]
wedgeCut = 0;
limesCut = 0;
i = 0;
while(wedgesCut < wedgesNeeded && i < limes.length) {
    if (limes[i] == "small"){
        wedgesCut += 6;
    }
 
    else if (limes[i] == "medium"){
wedgeCut
    }
else if(limes[i] == "large"){
    wedgesCut += 10;
}
limesCut++
i++
}
console.log(wedgesCut) 
// 


