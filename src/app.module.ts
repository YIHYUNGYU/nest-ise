import { Module } from '@nestjs/common';
import { PostModule } from './post/post.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { MySqlConfigModule } from './config/database/config.module';
import { MySqlConfigService } from './config/database/config.service';
import * as Joi from 'joi';

@Module({
  imports: [
    PostModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.dev.env', '.prod.env'],
      validationSchema: Joi.object({
        NODE_ENV: Joi.string().valid('dev', 'prod').required(),
        DB_HOST: Joi.string().required(),
        DB_PORT: Joi.string().required(),
        DB_USER: Joi.string().required(),
        DB_PASSWORD: Joi.string().required(),
        DB_DATABASE: Joi.string().required(),
      }),
    }),
    TypeOrmModule.forRootAsync({
      imports: [MySqlConfigModule],
      useClass: MySqlConfigService,
      inject: [MySqlConfigService],
    }),
  ],
})
export class AppModule {}
