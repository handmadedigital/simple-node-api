// Simple Array Helpers
const removeDuplicateStrings = (array) => array.filter((string, index) => array.indexOf(string) === index)
const combineArrayOfArrays = (array) => [].concat(...array)

module.exports = {
    removeDuplicateStrings,
    combineArrayOfArrays
}