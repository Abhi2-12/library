import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookModule } from './guests/book/book.module';
import { BorrowingHistoryModule } from './guests/borrowing-history/borrowing-history.module';
import { DonationModule } from './donation/donation.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { FineModule } from './fine/fine.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'abc',
      database: 'lmsdb',
      autoLoadEntities: true,
      synchronize: false,
    }),
    BookModule,
    BorrowingHistoryModule,
    DonationModule,
    AuthModule,
    UserModule,
    FineModule,
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
