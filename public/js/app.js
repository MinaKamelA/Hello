const sectionOne = document.querySelector('#one');
const sectionTwo = document.querySelector('#two');
const sectionThree = document.querySelector('#three');
const sectionFour = document.querySelector('#four');
const sectionFive = document.querySelector('#five');
const sectionSix = document.querySelector('#six');
const sectionSeven = document.querySelector('#seven');
const sectionEight = document.querySelector('#eight');
const sectionNine = document.querySelector('#nine');
const sectionTen = document.querySelector('#ten');
const sectionEleven = document.querySelector('#eleven');
const sectionTwelve = document.querySelector('#twelve');
let current = 1;


const doTrick =()=>{
    switch(current){
        case 1: sectionOne.classList.add('do-trick');
        break;
        case 2: sectionTwo.classList.add('do-trick');
        break;
        case 3: sectionThree.classList.add('do-trick');
        break;
        case 4: sectionFour.classList.add('do-trick');
        break;
        case 5: sectionFive.classList.add('do-trick');
        break;
        case 6: sectionSix.classList.add('do-trick');
        break;
        case 7: sectionSeven.classList.add('do-trick');
        break;
        case 8: sectionEight.classList.add('do-trick');
        break;
        case 9: sectionNine.classList.add('do-trick');
        break;
        case 10: sectionTen.classList.add('do-trick');
        break;
        case 11: sectionEleven.classList.add('do-trick');
        break;
        case 12: sectionTwelve.classList.add('do-trick');
        break;
        default: current = 1;
    }
    current++;
    return;
};

setInterval(doTrick, 3000);