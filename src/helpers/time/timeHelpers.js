import { Temporal } from "@js-temporal/polyfill";

/**
 * 
 * @param {string} timeStamp 9557 String
 * @example getYearMonth("2025-02-05T00:23:07.424Z")
 * @returns {Temporal.PlainYearMonth}
 */
export function getYearMonth(timeStamp) {
    // Create an Instant
    let instant = Temporal.Instant.from(timeStamp);

    // Convert to ZonedDateTime in UTC (or your desired time zone)
    let zoned = instant.toZonedDateTimeISO('UTC');

    // Extract the PlainYearMonth from that
    let yearMonth = Temporal.PlainYearMonth.from(zoned);

    return yearMonth;
}

