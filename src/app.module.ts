import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { ProductLineSchema } from './schemas/productLine.schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    MongooseModule.forFeature([{ name: 'ProductLine', schema: ProductLineSchema }]),
    DatabaseModule
  ],
  controllers: [
    AppController,
  ],
  providers: [
    AppService,],
})
export class AppModule { }
