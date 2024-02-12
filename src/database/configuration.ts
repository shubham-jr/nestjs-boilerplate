import { registerAs } from '@nestjs/config';
import { MongooseModuleOptions } from '@nestjs/mongoose';

export default registerAs('database', () => {
  const config = {
    uri: process.env.DB_URL,
  } as const as MongooseModuleOptions;
  return config;
});
