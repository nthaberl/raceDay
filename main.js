/* 
early adult registrants run at 930
late adult registrants run at 11
all youth runs at 1230
early adults receieve a number 1000+
everyone else gets a number <1000 */

//Step 1
let raceNumber = Math.floor(Math.random() * 1000);

//Step 2
let earlyReg = true;

//Step 3
let age = 34;

//Step 4
if (earlyReg === true && age >= 18){
    raceNumber += 1000;
    //Step 5
    console.log(`Your number is ${raceNumber} and you will race at 9:30AM`)
}

//Step 6
else if (earlyReg != true && age >= 18){
    console.log(`Your number is ${raceNumber} and you will race at 11AM`)
}

//Step 7
else if (age < 18){
    console.log(`Your number is ${raceNumber} and you will race at 12:30PM`)
}
