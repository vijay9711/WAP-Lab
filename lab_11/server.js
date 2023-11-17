const http = require('http');
http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title></head>');
  res.write('<body><img alt="ironman" src="https://assetsio.reedpopcdn.com/civil-war-still.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp"></body>');
  res.write('</html>');
  res.end();
}).listen(3000);