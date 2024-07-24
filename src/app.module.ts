import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongsController } from './songs/songs.controller';
import { SongsModule } from './songs/songs.module';
import { LoggerModule } from './common/middleware/logger/logger.module';
import { LoggerMiddleware } from './common/logger.middleware';

@Module({
  imports: [SongsModule, LoggerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer){
consumer.apply(LoggerMiddleware).forRoutes(SongsController);
  }
}
