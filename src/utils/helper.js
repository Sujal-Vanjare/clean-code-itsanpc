export function formatCount(count) {
  if (count < 1000) {
    return count.toString();
  } else if (count < 10000) {
    return (count / 1000).toFixed(1) + "K";
  } else {
    return Math.floor(count / 1000) + "K";
  }
}

// formatCount function takes a count and formats it based on certain thresholds:
// - If count is less than 1000, return the count as a string.
// - If count is less than 10000, return the count divided by 1000 with one decimal place and append 'K'.
// - If count is 10000 or more, return the count divided by 1000 (rounded down) and append 'K'.
