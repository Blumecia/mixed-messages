//Create the different arrays for subject, verb and COD
let subject = ['Scorpio', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];
let verb = ['should fear', 'should take more time for', 'will miss', 'will hate', 'should listen more to', 'will spend a great time with'];
let COD = ['their loved ones', 'their ennemies', 'their friends', 'their colleagues', 'their parents', 'their siblings', 'their partner', 'their teammates'];

//Join the randomly generated pieces of sentence
const generateSentence = () => {

    // Define randomly a subject for the sentence
    let randomSubject = subject[Math.floor(Math.random() * subject.length)]

    // Define randomly a verb for the sentence
    let randomVerb = verb[Math.floor(Math.random() * verb.length)]

    //Define randomly a COD for the sentence
    let randomCOD = COD[Math.floor(Math.random() * COD.length)]

    let mixedMessage = randomSubject + ' ' + randomVerb + ' ' + randomCOD + ' today.';
    console.log(mixedMessage);
}

generateSentence();