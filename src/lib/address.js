
/**
 * 
 * @param {import('http').Server} server 
 */
exports.address = function address(server) {
  const info = server.address();

  if (typeof info === 'string')
    return info;

  return `${info.address}:${info.port}`;
};