import { Appointment } from 'src/appointment/entities/appointment.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Service {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  descricao: string;

  @Column()
  preco: number;

  @Column('decimal')
  preco_base: number;

  @OneToMany(() => Appointment, (appointment) => appointment.servico)
  agendamentos: Appointment[];
}
