const fs = require('fs');
const zlib = require('zlib');
const gzip = zlib.createGzip();
const outStream = fs.createWriteStream('output.gz');
fs.createReadStream('./readme.md').pipe(gzip).pipe(outStream);