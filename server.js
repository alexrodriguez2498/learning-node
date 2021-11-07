const http = require('http');

const server = http.createServer((req, res) => {

})

const PORT = 5000;

server.listen(PORT, () => console.log(`server is running on port ${PORT}`));
