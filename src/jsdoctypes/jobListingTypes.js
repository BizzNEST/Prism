/**
 * @typedef {Object} JobListing
 * @property {string} id - Unique identifier for the listing.
 * @property {string} display - Display value for the listing (typically a title or label).
 * @property {string} title - Title of the job position.
 * @property {string} company - Company offering the job.
 * @property {string} location - Job location.
 * @property {string} pay - Compensation information (may be unavailable).
 * @property {string} description - JSON-encoded string containing arrays of job responsibilities, qualifications, and skills.
 * @property {string} typeOfWork - Nature of the job (e.g., "Full-time", "Internship").
 * @property {string} timeCommitment - Time commitment expected for the job (may be missing).
 * @property {string} link - URL to the job listing.
 * @property {string} scraped_by - Description or tag for the scraping operation.
 * @property {string} scraped_at - ISO timestamp when the data was scraped.
 * @property {string} jobCategory - Category of the job (may be "Uncategorized").
 */

/**
 * @typedef {Object} JobListingsResponse
 * @property {JobListing[]} listings - An array of job listings.
 */
