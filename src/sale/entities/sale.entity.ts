import { SaleProduct } from 'src/sale-product/entities/sale-product.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Sale {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  data: Date;

  @Column('decimal')
  valorTotal: number;

  @ManyToOne(() => User, (user) => user.vendas)
  user: User;

  @OneToMany(() => SaleProduct, (saleProduct) => saleProduct.sale)
  saleProducts: SaleProduct[];
}
