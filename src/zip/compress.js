import {
  createReadStream,
  createWriteStream,
} from 'node:fs';
import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream';

const compress = async () => {
  const source = createReadStream('src/zip/files/fileToCompress.txt');
  const destination = createWriteStream('src/zip/files/archive.gz');
  const gzip = createGzip();

  pipeline(source, gzip, destination, (err) => {
    if (err) {
      console.error('Pipeline failed:', err);
    } else {
      console.log('Pipeline succeeded.');
    }
  });
};

await compress();
