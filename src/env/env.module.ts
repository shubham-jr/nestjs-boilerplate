import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ENV_VALIDATION_SCHEMA } from './env.constant';

const ENV = process.env.NODE_ENV;

@Module({
  imports: [
    ConfigModule.forRoot({
      expandVariables: true,
      validationSchema: ENV_VALIDATION_SCHEMA,
      envFilePath: `.env.${ENV}`,
      validationOptions: {
        abortEarly: true,
      },
    }),
  ],
  exports: [ConfigModule],
})
export class EnvModule {}
