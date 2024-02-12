import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonModule } from './common/common.module';
import { DatabaseModule } from './database/database.module';
import { EnvModule } from './env/env.module';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [EnvModule, CommonModule, DatabaseModule, TodoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
