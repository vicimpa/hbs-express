const { join } = require("path");

/**
 * 
 * @param {...string} segments 
 * @returns 
 */
exports.dir = function dir(...segments) {
  return join(__dirname, '../', ...segments);
};