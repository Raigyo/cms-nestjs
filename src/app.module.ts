import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticlesModule } from './articles/articles.module';
import configuration from './config/configuration';

@Module({
  imports: [
    ArticlesModule,
    ConfigModule.forRoot({
      envFilePath: `.env`,
      isGlobal: true,
    }),

    MongooseModule.forRoot(process.env.DATABASE_URI, { useNewUrlParser: true }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
