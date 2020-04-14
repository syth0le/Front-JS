/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {
    let resultString = '';
    let lowerHashtags = [];
    hashtags.forEach(function(word, i, hashtags){
        word = word.toLocaleLowerCase();
        lowerHashtags.push(word);
    });
    let setHashtag = new Set(lowerHashtags);
    setHashtag.forEach(function (word, i, setHashtag) {
        resultString += ', ' + word;
    });
    resultString = resultString.slice(2);
    return resultString;
};
console.log(module.exports(['web', 'coursera', 'JavaScript', 'Coursera', 'script', 'programming']));