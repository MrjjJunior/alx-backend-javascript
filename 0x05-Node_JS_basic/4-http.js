/** 
 * Creating a small HTTP server 
*/

const http = require('http');
const PORT = 1245;
const HOST = 'localhost';
const app = http.createServer();

app.on('request', (_, res) => {
  const response = 'Hello Holberton School!';

  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', response.length);
  res.write(Buffer.from(response));
});

app.listen(PORT, HOST,() => {
  process.stdout.write(`Server listening at -> http://${HOST}:${PORT}\n`);
});

module.exports = app;
