/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
    let sharp = '#';
    let arrTweet = tweet.split(' ');
    let arrResult = [];
    arrTweet.forEach(function (word, i, arrTweet) {
        if(word.indexOf(sharp) >= 0){
            word = word.slice(1);
            arrResult.push(word);
            return arrResult;}
    });
    return arrResult
};
