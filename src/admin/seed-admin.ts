import * as bcrypt from 'bcrypt';
import { DataSource } from 'typeorm';
import { Admin } from './admin.entity';

const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '1234', // your db password
  database: 'librarydb',
  entities: [Admin],
  synchronize: true,
});

async function seedAdmin() {
  await AppDataSource.initialize();

  const adminRepo = AppDataSource.getRepository(Admin);

  const hashedPassword = await bcrypt.hash('admin123', 10);

  const admin = adminRepo.create({
    email: 'admin@library.com',
    password: hashedPassword,
  });

  await adminRepo.save(admin);
  console.log('✅ Admin inserted!');
  await AppDataSource.destroy();
}

seedAdmin();
