import { Transform } from 'node:stream';

const transform = async () => {
  const reverseTransform = new Transform({
    transform(chunk, _encoding, callback) {
      const str = chunk.toString();
      const reversed = str.split('').reverse().join('');
      callback(null, reversed);
    }
  });

  process.stdin.setEncoding('utf8');
  process.stdin.pipe(reverseTransform).pipe(process.stdout);
};

await transform();
