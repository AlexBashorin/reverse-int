module.exports = function reverse (n) {
    const result = n.toString();
    return parseInt(result.split("").reverse().join(""));
}
