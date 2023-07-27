const { join } = require("path");

exports.dir = function dir(...segments) {
  return join(__dirname, '../', ...segments);
};