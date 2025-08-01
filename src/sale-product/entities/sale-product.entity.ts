import { Sale } from 'src/sale/entities/sale.entity';
import { Product } from 'src/product/entities/product.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SaleProduct {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Sale, (sale) => sale.saleProducts)
  sale: Sale;

  @ManyToOne(() => Product, (product) => product.saleProducts)
  product: Product;

  @Column()
  quantidade: number;

  @Column('decimal')
  precoUnitario: number;
}
