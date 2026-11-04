const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8080;
const ROOT = path.resolve(__dirname);

const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.json': 'application/json'
};

const server = http.createServer((req, res) => {
  // Normalize request URL
  let safeUrl = req.url.split('?')[0];
  if (safeUrl === '/' || safeUrl === '') {
    safeUrl = '/index.html';
  }
  
  // Prevent directory traversal
  const resolvedPath = path.normalize(path.join(ROOT, safeUrl));
  if (!resolvedPath.startsWith(ROOT)) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('Access Denied');
    return;
  }

  if (fs.existsSync(resolvedPath) && fs.statSync(resolvedPath).isFile()) {
    const ext = path.extname(resolvedPath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': 'no-cache, no-store, must-revalidate'
    });
    fs.createReadStream(resolvedPath).pipe(res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html; charset=UTF-8' });
    res.end('<h1>404: File Not Found</h1><p><a href="/mock-preview.html">Go to Mock Preview</a></p>');
  }
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`\n======================================================`);
  console.log(` Mock preview server is LIVE!`);
  console.log(` URL: http://localhost:${PORT}/mock-preview.html`);
  console.log(`======================================================\n`);
});
