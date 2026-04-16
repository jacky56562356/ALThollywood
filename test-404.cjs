const http = require('http');
http.get('http://localhost:3000/api/non-existent', (res) => {
  console.log(res.statusCode);
});
