// Task 1
let kind = 'car';
let needsLicenseResult;

if (kind == 'car' || kind == 'truck'){
    needsLicenseResult = true;
}
else{
    needsLicenseResult = false;
}

//Task 2
let option1 = 'Toyota';
let option2 = 'Honda';

let chooseVehicleResult;
if (option1 > option2){
    chooseVehicleResult = option2 + ' is clearly the better choice.';
}

else  {chooseVehicleResult = option1 + ' is clearly the better choice.';}

console.log(chooseVehicleResult)

//Task 3
let originalPrice = 1000;
let age = 5;
let calculateResellPriceResult;

if (age < 3){
    calculateResellPriceResult = originalPrice * 0.8;
}

else if (age > 10){
    calculateResellPriceResult = originalPrice * 0.5;
}

else {
    calculateResellPriceResult = originalPrice * 0.7;
}