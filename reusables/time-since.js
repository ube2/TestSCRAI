
export const timeSince = function (date) {
    const seconds = Math.floor((new Date(date).getTime() - Date.now()) / 1000);
    const cutoffs = [60, 3600, 86400, 86400 * 7, 86400 * 30, 86400 * 365, Infinity];
    const units = ["second", "minute", "hour", "day", "week", "month", "year"];
    const unitIndex = cutoffs.findIndex(cutoff => cutoff > Math.abs(seconds));
    const divisor = unitIndex ? cutoffs[unitIndex - 1] : 1;
    const rtf = new Intl.RelativeTimeFormat(navigator.language, { numeric: "auto" });
    return rtf.format(Math.floor(seconds / divisor), units[unitIndex]);
}