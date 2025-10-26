import { createWriteStream } from 'node:fs';

const write = async () => {
  const stream = createWriteStream('src/streams/files/fileToWrite.txt', { encoding: 'utf8' });
  process.stdin.pipe(stream);
};

await write();
