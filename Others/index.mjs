import http from "http";

const HOSTNAME = '0.0.0.0'; 
const PORT = 3000;

const server = http.createServer((req, res) => {
  res.end("Hello World");
});

server.listen(PORT, HOSTNAME, () => {
  console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
});