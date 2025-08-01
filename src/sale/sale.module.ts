import { Module } from '@nestjs/common';
import { SaleService } from './sale.service';
import { SaleController } from './sale.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sale } from './entities/sale.entity';
import { UsersModule } from 'src/users/users.module';
import { SaleProductModule } from 'src/sale-product/sale-product.module';

@Module({
  imports: [TypeOrmModule.forFeature([Sale]), UsersModule, SaleProductModule],
  controllers: [SaleController],
  providers: [SaleService],
  exports: [TypeOrmModule],
})
export class SaleModule {}
