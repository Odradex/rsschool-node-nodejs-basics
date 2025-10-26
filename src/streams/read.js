import { createReadStream } from 'node:fs';

const read = async () => {
  const stream = createReadStream('src/streams/files/fileToRead.txt', { encoding: 'utf8', autoClose: true });

  for await (const chunk of stream) {
    process.stdout.write(chunk);
  }

  process.stdout.write('\n');
};

await read();
