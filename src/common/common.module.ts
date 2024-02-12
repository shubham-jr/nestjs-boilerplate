import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CommonService } from './common.service';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest')],
  providers: [CommonService],
})
export class CommonModule {}
