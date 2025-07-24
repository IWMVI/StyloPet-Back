import { Appointment } from 'src/appointment/entities/appointment.entity';
import { Pet } from 'src/pet/entities/pet.entity';
import { Sale } from 'src/sale/entities/sale.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  nome: string;

  @Column()
  telefone: string;

  @Column()
  endereco: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  data_cadastro: Date;

  @OneToMany(() => Pet, (pet) => pet.user)
  pets: Pet[];

  @OneToMany(() => Sale, (sale) => sale.user)
  vendas: Sale[];

  @OneToMany(() => Appointment, (appointment) => appointment.user)
  agendamentos: Appointment[];
}
