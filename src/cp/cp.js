import { fork } from 'child_process';

const spawnChildProcess = async (args) => {
  const child = fork('src/cp/files/script.js', args, {
    stdio: ['pipe', 'pipe', 'inherit', 'ipc'],
  });

  process.stdin.pipe(child.stdin);

  child.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['arg1', 'arg2']);
