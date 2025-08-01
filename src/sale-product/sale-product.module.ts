import { Module } from '@nestjs/common';
import { SaleProductService } from './sale-product.service';
import { SaleProductController } from './sale-product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SaleProduct } from './entities/sale-product.entity';
import { ProductModule } from 'src/product/product.module';

@Module({
  imports: [TypeOrmModule.forFeature([SaleProduct]), ProductModule],
  controllers: [SaleProductController],
  providers: [SaleProductService],
  exports: [TypeOrmModule],
})
export class SaleProductModule {}
