import fs from 'fs/promises';

const read = async () => {
  try {
    const data = await fs.readFile(
      'src/fs/files/fileToRead.txt',
      { encoding: 'utf8' }
    );
    console.log(data);
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await read();
