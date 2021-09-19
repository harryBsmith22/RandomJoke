const randomJoke = () => {
    const knockString = 'Knock Knock';
    const whoString = "Who's there ?";
    const thereString = " who ?";

    const randomString = ['Donald', 'Chicken', 'Jake', 'Doctor'];
    const randomPunch = ['Duck', 'Finger', 'Peralta', 'doMeALittle' ];

    let chosenString = randomString[Math.floor(Math.random()*randomString.length)];
    let chosenPunch = randomPunch[Math.floor(Math.random()*randomPunch.length)];

    setTimeout(() => {
        console.log(knockString);
    },0);

    setTimeout(() => {
        console.log(whoString);
    },2000)

    setTimeout(() => {
        console.log(chosenString)
    },4000)

    setTimeout(() => {
        console.log(chosenString + thereString);
    },6000)
    setTimeout(() => {
        console.log(chosenString + ' ' + chosenPunch);
    },8000)
}