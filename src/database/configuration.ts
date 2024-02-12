import { registerAs } from '@nestjs/config';
import { MongooseModuleOptions } from '@nestjs/mongoose';

export default registerAs('database', () => {
  const config = {
    url: process.env.DB_URL,
  } as const as MongooseModuleOptions;
  return config;
});
