import { Worker } from 'worker_threads';
import os from 'node:os';
import { URL } from 'node:url';

const performCalculations = async () => {
  const cpuCount = os.cpus().length;
  const start = 10;
  const workerPath = new URL('./worker.js', import.meta.url);

  const promises = [];

  for (let i = 0; i < cpuCount; i++) {
    const n = start + i;
    const worker = new Worker(workerPath);

    const p = new Promise((resolve) => {
      let settled = false;

      worker.once('message', async (value) => {
        settled = true;
        resolve({ status: 'resolved', data: value });
        await worker.terminate();
      });

      worker.once('error', async () => {
        settled = true;
        resolve({ status: 'error', data: null });
        await worker.terminate();
      });

      worker.postMessage(n);
    });

    promises.push(p);
  }

  const results = await Promise.all(promises);
  console.log(results);
};

await performCalculations();
