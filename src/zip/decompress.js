import {
  createReadStream,
  createWriteStream,
} from 'node:fs';
import { createGunzip } from 'node:zlib';
import { pipeline } from 'node:stream';

const decompress = async () => {
  const source = createReadStream('src/zip/files/archive.gz');
  const destination = createWriteStream('src/zip/files/fileToDecompress.txt');
  const gunzip = createGunzip();

  pipeline(source, gunzip, destination, (err) => {
    if (err) {
      console.error('Pipeline failed:', err);
    } else {
      console.log('Pipeline succeeded.');
    }
  });
};

await decompress();
