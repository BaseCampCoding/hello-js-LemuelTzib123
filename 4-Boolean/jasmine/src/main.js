let knightIsAwake = true;
let archerIsAwake = false;
let prisonerIsAwake = true;
let petDogIsPresent = true;

let canExectuteFastAttack = !knightIsAwake;
// False
if (knightIsAwake == false) {
    canExectuteFastAttack = true
}
else {
    canExectuteFastAttack = false
}
console.log('Fast Attack: ' + canExectuteFastAttack);
let canSpy = knightIsAwake || archerIsAwake || prisonerIsAwake;
console.log('Spy: ' + canSpy);
// True
let canSignalPrisoner = prisonerIsAwake && !archerIsAwake;
console.log('Signal Prisoner: ' + canSignalPrisoner);
// True
let canFreePrisoner = (petDogIsPresent && !archerIsAwake) ||
    (!petDogIsPresent && prisonerIsAwake && !knightIsAwake && !archerIsAwake);
console.log('Free Prisoner: ' + canFreePrisoner);
// True
