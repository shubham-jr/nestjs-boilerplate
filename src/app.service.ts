import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private readonly config: ConfigService) {
    console.log(process.env.DB_URL);
  }
  getHello(): string {
    this.config.get('database.url');
    return 'Hello World!';
  }
}
