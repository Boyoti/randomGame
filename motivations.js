/* GLOBAL SCOPE DECLARATION */

// Get today date as the Random range
const date = new Date();

let day = date.getDate();

let currentDay = String(date.getDate()).padStart(2, '0');

let currentMonth = String(date.getMonth()+1).padStart(2,"0");

let currentYear = date.getFullYear();

// We will display the date as DD-MM-YYYY 

const currentDate = `${currentDay}-${currentMonth}-${currentYear}`;

// Define the sentences for motivation
const sentences = [
    'We cannot solve problems with the kind of thinking we employed when we came up with them.',
    'Learn as if you will live forever, live like you will die tomorrow.',
    'Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.',
    'When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out.',
    'When you change your thoughts, remember to also change your world.',
    'It is only when we take chances, when our lives improve. The initial and the most difficult risk that we need to take is to become honest.',
    'Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together.',
    'Success is not final; failure is not fatal: It is the courage to continue that counts.',
    'It is better to fail in originality than to succeed in imitation.',
    'The road to success and the road to failure are almost exactly the same.',
    'Success usually comes to those who are too busy looking for it.',
    'Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.',
    'Nothing in the world can take the place of Persistence. Talent will not; nothing is more common than unsuccessful men with talent. Genius will not; unrewarded genius is almost a proverb. Education will not; the world is full of educated derelicts. The slogan \'Press On\' has solved and always will solve the problems of the human race.',
    'There are three ways to ultimate success: The first way is to be kind. The second way is to be kind. The third way is to be kind.',
    'Success is peace of mind, which is a direct result of self-satisfaction in knowing you made the effort to become the best of which you are capable.',
    'I never dreamed about success. I worked for it.',
    'Success is getting what you want, happiness is wanting what you get.',
    'The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.',
    'Don’t let yesterday take up too much of today.',
    'You learn more from failure than from success. Don’t let it stop you. Failure builds character.',
    'If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you.'
];

// Define the authors of the motivational sentences
const authors = [
    'Albert Einstein',
    'Mahatma Gandhi',
    'Mark Twain',
    'Eleanor Roosevelt',
    'Norman Vincent Peale',
    'Walter Anderson',
    'Diane McLaren',
    'Winston S. Churchill',
    'Herman Melville',
    'Colin R. Davis',
    'Henry David Thoreau',
    'Dale Carnegie',
    'Calvin Coolidge',
    'Mister Rogers',
    'John Wooden',
    'Estée Lauder',
    'W. P. Kinsella',
    'Winston Churchill',
    'Will Rogers',
    'Unknown',
    'Steve Jobs'
];

/* GENERATION OF THE SELECTION INDEX */

function generateRandomNumber(num) {
    return Math.floor(Math.random() * num);
}

/* MOTIVATIONAL SENTENCE SELECTION FUNCTION */

function getSentence(index, sentences) {
    //console.log('getSentence :: ' + index);
    return sentences[index];
}

/* SELECTING THE AUTHOR OF THE MOTIVATION SENTENCE */

function getAuthor(index, authors) {
    //console.log('getAuthor :: ' + index);
    return authors[index];
}

/* GAME EXECUTION FUNCTION */

function runGame() {
    const indexOut = generateRandomNumber(day);
    const authorOut = getAuthor(indexOut, authors);
    const sentenceOut = getSentence(indexOut, sentences);

    console.log(`DATE : ${currentDate} \nSENTENCE : ${sentenceOut} \nAUTHOR : ${authorOut}`);
}

// Run the Game !
runGame();