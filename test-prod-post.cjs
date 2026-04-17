const { spawn } = require('child_process');
const http = require('http');

console.log('Starting server in prod mode...');
const srv = spawn('node', ['server.ts'], { env: { ...process.env, NODE_ENV: 'production' } });
srv.stdout.on('data', d => console.log('S-OUT:', d.toString().trim()));
srv.stderr.on('data', d => console.log('S-ERR:', d.toString().trim()));

setTimeout(() => {
  const req = http.request('http://localhost:3000/api/submit-application', { method: 'POST' }, res => {
    console.log('POST Status:', res.statusCode);
    res.on('data', d => console.log('POST Data:', d.toString()));
    srv.kill();
  });
  req.on('error', e => console.error('REQ ERR:', e));
  req.end();
}, 2000);
