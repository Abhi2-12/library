import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminModule } from './admin/admin.module';
import { Admin } from './admin/admin.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'librarydb',
      entities: [Admin],
      synchronize: true, // use false in production
    }),
    AdminModule,
  ],
})
export class AppModule {}
