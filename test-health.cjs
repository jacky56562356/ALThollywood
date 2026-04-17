const http = require('http');
http.get('http://localhost:3000/api/health', (res) => {
  console.log('Status:', res.statusCode);
  res.on('data', d => console.log(d.toString()));
});
