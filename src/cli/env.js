import { env } from 'process';

const parseEnv = () => {
  Object.entries(env).forEach(([key, value]) => {
    if (key.startsWith('RSS_')) console.log(`${key}=${value};`);
  });
};

parseEnv();
