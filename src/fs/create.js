import fs from 'fs/promises';

const create = async () => {
  try {
    await fs.appendFile(
      'src/fs/files/fresh.txt', 
      'I am fresh and young', 
      { flag: 'wx' }
    );
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await create();
