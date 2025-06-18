import { getYearMonth } from "../../helpers/time/timeHelpers.js";
/**
 * @typedef {object} sortByTimeConfig
 * @property {"month" | "year" } scale
 */

/**
 * @typedef {Object} MonthData
 * @property {JobListing[]} listings - Array of job listings for the month.
 */

/**
 * @typedef {Object.<string, MonthData>} YearData
 * An object mapping month strings (e.g. "2", "5") to MonthData.
 */

/**
 * @typedef {Object.<string, YearData>} TimeDataPlot
 * An object mapping year strings (e.g. "2025") to YearData.
 */

/**
 * 
 * @param {JSON<JobListingsResponse>} data 
 * @param {sortByTimeConfig} options 
 * @returns {TimeDataPlot}
 */
export function sortByTime(data, options) {
    /**
     * @type {TimeDataPlot}
     */
    let timeDataPlot = {};
    for (let joblisting of data.listings) {
        let listingYearMonth = getYearMonth(joblisting.scraped_at)
        let listingYear = listingYearMonth.year;
        let listingMonth = listingYearMonth.month;

        timeDataPlot[listingYear] = timeDataPlot[listingYear] || {};
        timeDataPlot[listingYear][listingMonth] = timeDataPlot[listingYear][listingMonth] || {};
        timeDataPlot[listingYear][listingMonth]["listings"] = timeDataPlot[listingYear][listingMonth]["listings"] || []
        timeDataPlot[listingYear][listingMonth]["listings"].push(joblisting)
    }
    return timeDataPlot
}

