const express = require('express');          // for express server
const fs = require('fs');                    // for file system
const path = require('path');
const expressServer = express();

const indexHTML = (() => {
  // path.resolve returns the directory relative to this file and runs the server from that location
  // this makes sure that the relative path of file which we are trying to read is correct and the file is available (if it really is)
  return fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf-8');
})();

expressServer.use('/dist', express.static(path.resolve(__dirname, './dist')));

require('./build/dev-server')(expressServer);

expressServer.get('*', (request, response) => {
  response.write(indexHTML);
  response.end();
});

const port = process.env.PORT || 3000;
expressServer.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
