export function formatCount(count) {
  if (count < 1000) {
    return count.toString();
  } else if (count < 10000) {
    return (count / 1000).toFixed(1) + "K";
  } else {
    return Math.floor(count / 1000) + "K";
  }
}
