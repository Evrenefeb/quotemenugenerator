const insprationalWordsDatabase = ['The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt',
'The future is not something we enter. The future is something we create. – Lenoard I. Sweet',
'The future is an unknown, but a somewhat predictable unknown. To look to the future we must first look back upon the past. That is where the seeds of the future were planted. – Albert Einstein',
'Study the past if you would define the future. – Confucius', 'The past is a source of knowledge, and the future is a source of hope. Love of the past implies faith in the future. – Stephen Ambrose',
'The future depends on what we do in the present. – Mahatma Gandhi', 'The power for creating a better future is contained in the present moment: You create a good future by creating a good present. – Eckhart Tolle',
'Change is the law of life. And those who look only to the past or present are certain to miss the future. – John F. Kennedy',
'Life is a preparation for the future; and the best preparation for the future is to live as if there were none. – Albert Einstein',
'There is no better teacher than history in determining the future… There are answers worth billions of dollars in $30 history book. – Charlie Munger',
'Life can only be understood backwards; but it must be lived forwards. – Søren Kierkegaard',
'The future rewards those who press on. I don’t have time to feel sorry for myself. I don’t have time to complain. I’m going to press on. – Barack Obama',
'Stop being a prisoner of your past. Become the architect of your future. – Robin Sharma',
'It’s what you do in the present that will redeem the past and thereby change the future. – Paulo Coelho',
'Your present circumstances don’t determine where you can go, they merely determine where you start. – Nido Quebein'];
const hopefulWordsDatabase = ['Your past does not equal your future. – Tony Robbins',
'The best way to predict the future is to create it. – Abraham Lincoln',
'You cannot escape the responsibility of tomorrow by evading it today. – Abraham Lincoln',
'Long-range planning does not deal with the future decisions, but with the future of present decisions. – Peter F. Drucker',
'I like the dreams of the future better than the history of the past. – Thomas Jefferson',
'Cry. Forgive. Learn. Move on. Let your tears water the seeds of your future happiness. – Steve Maraboli'];
const ponderfulWordsDatabase = ['We should all be concerned about the future because we will have to spend the rest of our lives there. – Charles Kettering',
'Enjoy present pleasures in such a way as not to injure future ones. – Seneca',
'The future influences the present just as much as the past. – Friedrich Nietzsche',
'We fear the future because we are wasting today. – Mother Teresa',
'The only difference between the saint and the sinner is that every saint has a past, and every sinner has a future. – Oscar Wilde',
'Your own positive future begins in this moment. All you have is right now. Every goal is possible from here. – Lao Tzu',
'Our focus is our future and what we focus on will multiply in our life. – David Denotaris',
'Belief in a future life is the appetite of reason. – Walter Landor',
'We know not what the future holds, but we do know who holds the future. – Willis J. Ray',
'The future belongs to those who belong to God. This is hope. – W. T. Purkiser', 'Never be afraid to trust an unknown future to a known God. – Corrie ten Boom'];
const insprationalWordsCount = insprationalWordsDatabase.length;
const hopefulWordsCount = hopefulWordsDatabase.length;
const ponderfulWordsCount = ponderfulWordsDatabase.length;
function getRandomWordID(max) {
    return Math.floor(Math.random() * max);
}
let insprationalWordID = getRandomWordID(insprationalWordsCount);
let hopefulWordID = getRandomWordID(hopefulWordsCount);
let ponderfulWordcID = getRandomWordID(ponderfulWordsCount);
const createQuoteMenu = () => {
    console.log('- Today\'s Quote Menu - ')
    console.log(`Insprational Word : ${insprationalWordsDatabase[insprationalWordID]}`);
    console.log(`Hopeful Word : ${hopefulWordsDatabase[hopefulWordID]}`);    
    console.log(`Ponderful Word : ${ponderfulWordsDatabase[ponderfulWordID]}`);    
}
createQuoteMenu();