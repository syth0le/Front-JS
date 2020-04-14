/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval) {
    let localRes = (hours * 60) + minutes + interval;
    while(localRes >= 1440){
        localRes -= 1440
    }
    let hoursRes = Math.floor(localRes / 60);
    let minutesRes = localRes - (hoursRes * 60);
    if (hoursRes < 10){
        hoursRes = "0" + String ( hoursRes );
    }
    if (minutesRes < 10){
        minutesRes = "0" + String ( minutesRes )
    }
    return String(hoursRes) + ":" + String(minutesRes);
};
