import { countWordOccurrences } from '../../helpers/regex/regexHelpers.js';
import { sortByTime } from './timeMachine.js';
/**
 * @import { JobListingsResponse } from '../../jsdoctypes/jobListingTypes.js' 
 */

/**
 * @typedef {Object} TermData
 * @property {number} occurrences - Number of times the term has occurred.
 * @property {Array<string|number>} jobrefs - List of job listing IDs referencing the term.
 */

/**
 * @typedef {Object.<string, TermData>} DataPlot
 * An object mapping each term (string) to its data.
 */

/**
 * @description - generates a data plot object from joblisting data object
 * @param {JobListingsResponse} initData
 * @param {Array<string>} techTerms
 * @returns {DataPlot}
 */
export function getDataPlot(initData, techTerms) {
  /** @type {DataPlot} */
  let dataPlot = {};

  for (let jobListing of initData.listings) {
    let jobDescription = jobListing.description;
    for (let term of techTerms) {
      let occurrences = countWordOccurrences(jobDescription, term);
      if (occurrences > 0) {
        if (!dataPlot[term]) {
          dataPlot[term] = { occurrences: 0, jobrefs: [] };
        }
        dataPlot[term].occurrences += occurrences;
        dataPlot[term].jobrefs.push(jobListing.id);
      }
    }
  }
  return dataPlot;
}

/**
 * 
 * @param {DataPlot} data 
 * @param {number} minFrequency 
 * @param {Array<string>} excludeList 
 * @returns {DataPlot}
 */
function refineQualityMetrics(data, minFrequency = 10, excludeList = []) {
  /**
   *  @type {DataPlot}
   */
  return Object.entries(data)
    // Filter by minimum frequency and exclusion list
    .filter(([key, value]) => value.occurrences >= minFrequency && !excludeList.includes(key))
    // Sort descending by frequency
    .sort((a, b) => b[1] - a[1])
    // Convert back to an object
    .reduce((acc, [key, value]) => {
      acc[key] = value;
      return acc;
    }, {});
}

/**
 * @param {JobListingsResponse} data 
 * @param {Array<string>} keywords 
 * @returns {DataPlot}
 */
export async function sniff(data, keywords, options = { threshold: 0, excludeList: [] }) {
  let metrics = refineQualityMetrics(getDataPlot(data, keywords), options.threshold, options.excludeList)
  return metrics
}

/**
 * @typedef {Object<string,DataPlot>} MonthTermData
 */

/**
 * @typedef {Object<string,MonthTermData>} YearTermData
 */

/**
 * @typedef {Object<string,YearTermData>} TimeSortedDataPlot
 */

/**
 * @import { TimeSortedJobListings } from "./timeMachine.js";
 */

/**
 * @param {JobListingsResponse} data 
 * @param {Array<string>} keywords 
 * @returns {TimeSortedDataPlot}
 */
export async function sniffTimeSorted(data, keywords, options = { threshold: 0, excludeList: [] }) {
  /**
   * @type {TimeSortedJobListings}
   */
  let sortedData = sortByTime(data, { scale: "month" })
  /**
   * @type {TimeSortedDataPlot}
   */
  let sortedDataPlot = {};
  for (const year of Object.keys(sortedData)) {
    for (const month of Object.keys(sortedData[year])) {
      let keywordMatches = await sniff(sortedData[year][month], keywords, options)
      sortedDataPlot[year] = sortedDataPlot[year] || {};
      sortedDataPlot[year][month] = keywordMatches
    }
  }
  return sortedDataPlot
}

/**
 * @param {TimeSortedDataPlot} data
 * @returns {Array<{ year: string, month: string, term: string, occurrences: number, jobrefs: Array<string|number> }>}
 */
export function flattenTimeSorted(data) {
  const result = [];
  for (const year in data) {
    for (const month in data[year]) {
      const terms = data[year][month];
      for (const term in terms) {
        const termData = terms[term];
        result.push({
          year,
          month,
          term,
          occurrences: termData.occurrences,
          jobrefs: termData.jobrefs,
        });
      }
    }
  }

  return result;
}