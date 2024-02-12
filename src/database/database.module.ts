import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import databaseConfig from './configuration';

@Module({
  imports: [MongooseModule.forRootAsync(databaseConfig.asProvider())],
})
export class DatabaseModule {}
