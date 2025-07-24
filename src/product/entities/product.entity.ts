import { SaleProduct } from 'src/sale-product/entities/sale-product.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  nome: string;

  @Column()
  descricao: string;

  @Column('decimal')
  preco: number;

  @Column()
  estoque: number;

  @Column()
  categoria: string;

  @OneToMany(() => SaleProduct, (saleProduct) => saleProduct.product)
  saleProducts: SaleProduct[];
}
