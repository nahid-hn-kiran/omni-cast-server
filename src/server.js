import mongoose from 'mongoose';
import config from './config/index.js';
import app from './app.js';

async function main() {
  try {
    await mongoose.connect(config.database_url);
    if (process.env.NODE_ENV !== 'production') {
      app.listen(config.port, () => {
        console.log(`Server is running on port ${config.port}`);
      });
    }
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

main();

export default app;
