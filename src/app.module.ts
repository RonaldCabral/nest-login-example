import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { User } from './entities/user.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'login_nest_test',
      entities: [__dirname + './**/**/*entity{.ts,.js'],
      synchronize: true
  }),
  TypeOrmModule.forFeature([User]),
  JwtModule.register({
      secret: 'secret',
      signOptions: {expiresIn: '1d'}
  })
  ],
  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
