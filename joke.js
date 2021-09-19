const randomJoke = () => {
    const knockString = 'Knock Knock';
    const whoString = "Who's there ?";
    const thereString = " who ?";

    const randomString = ['Donald', 'Chicken', 'Jake', 'Doctor'];
    const randomPunch = ['Duck', 'Finger', 'Peralta', 'doMeALittle' ];

    let chosenString = randomString[Math.floor(Math.random()*randomString.length)];
    let chosenPunch = randomPunch[Math.floor(Math.random()*randomPunch.length)];

}