import { Module } from '@nestjs/common';
import { AccessService } from './access.service';
import { AccessController } from './access.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [AccessController],
  providers: [AccessService,PrismaService]
})
export class AccessModule {}
