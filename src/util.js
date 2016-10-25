export const SEC_MS = 1000;
export const MIN_MS = SEC_MS * 60;
export const HOUR_MS = MIN_MS * 60;

/**
 * Returns object with formatted date based on given input in minutes
 * @param {Number} minutes
 * @returns {{date: String, period: String, isRound: Boolean}}
 */
export function parseTime(minutes){
     let date = new Date(minutes * MIN_MS);
     let hours = date.getUTCHours();
     let mins = date.getUTCMinutes();
     let shortHours = hours > 12 ? hours - 12: hours;
     return {
          date: shortHours + ":" + fillZeros(mins, 2),
          period: hours >= 12 ? "PM" : "AM",
          isRound: mins === 0
     };
}

/**
 * Adds zeros to the right side of the passed number
 * until its size match passed 'length' value
 * @param {Number} number
 * @param {Number} length
 * @returns {String}
 */
export function fillZeros(number, length) {
     let str = number + "";
     if (str.length >= length)
         return str;
     return str + (new Array(length - str.length + 1)).join("0");
}
