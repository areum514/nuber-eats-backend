import { Module } from '@nestjs/common';
import * as Joi from 'joi'; /* Typescript or nesjs로 되어있지 않는 패키기 import하는 방법 */
import { ConfigModule } from '@nestjs/config';
import {GraphQLModule} from '@nestjs/graphql'
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestaurantsModule } from './restaurants/restaurants.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true,
      envFilePath:process.env.NODE_ENV==="dev"? ".env.dev":".env.test",
      ignoreEnvFile:process.env.NODE_ENV==='prod',
      validationSchema:Joi.object({
        NODE_ENV:Joi.string().valid('dev','prod').required(),
        DB_HOST:Joi.string().required(),
        DB_PORT:Joi.string().required(),
        DB_USERNAME:Joi.string().required(),
        DB_PASSWARD:Joi.string().required(),
        DB_NAME:Joi.string().required(),
      })
    }),
    RestaurantsModule,
    TypeOrmModule.forRoot({
      type: "postgres",
      host:process.env.DB_HOST,
      port:+process.env.DB_PORT,
      username:process.env.DB_USERNAME,
      password:process.env.DB_PASSWARD,
      database:process.env.DB_NAME,
      synchronize: true,
      logging: true
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
