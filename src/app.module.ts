import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegisterModule } from './register/register.module';
import { AccessModule } from './access/access.module';

@Module({
  imports: [RegisterModule, AccessModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
