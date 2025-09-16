// Code your solution here
// index.js (or helpers.js)

// 1. findMatching: exact match, case-insensitive
function findMatching(drivers, name) {
  return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

// 2. fuzzyMatch: match only the beginning letters
function fuzzyMatch(drivers, letters) {
  return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
}

// 3. matchName: return drivers whose name matches the given string
function matchName(drivers, name) {
  return drivers.filter(driver => driver.name === name);
}


