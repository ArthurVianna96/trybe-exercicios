const wakeUp = () => 'Acordando!!!';
const eatBreakFast = () => 'Bora tomar café!!!';
const goToSleep = () => 'Partiu dormir!!!';

const doingThings = (callback) => console.log(callback());

doingThings(wakeUp);
doingThings(eatBreakFast);
doingThings(goToSleep);