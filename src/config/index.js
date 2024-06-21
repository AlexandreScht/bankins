import dotenv from 'dotenv';
dotenv.config();

const config = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || 3005,
    ORIGIN: process.env.ORIGIN || 'http://localhost:3000',
    CREDENTIALS: process.env.CREDENTIALS === 'true',
    log: {
      DIR: process.env.LOG_DIR || 'logs',
      FORMAT: process.env.LOG_FORMAT || 'dev',
  },
  API_CREDENTIALS: {
   BANKIN_VERSION: process.env.BANKIN_VERSION,
   BANKIN_DEVICE: process.env.BANKIN_DEVICE,
  },
  API_URL: process.env.API_URL
}

export default config