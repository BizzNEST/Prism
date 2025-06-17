/**
 * @description - Searches for matches of a keyword in a string
 * @param {string} text 
 * @param {string} word 
 * @returns {number}
 */
export function countWordOccurrences(text, word) {
    const regex = new RegExp(`\\b${word}\\b`, 'gi'); // \b ensures whole word match
    const matches = text.match(regex);
    return matches ? matches.length : 0;
  }