import { Employee } from 'src/employee/entities/employee.entity';
import { Pet } from 'src/pet/entities/pet.entity';
import { Service } from 'src/service/entities/service.entity';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Appointment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  dataHora: Date;

  @ManyToOne(() => Pet, (pet) => pet.appointments)
  pet: Pet;

  @ManyToOne(() => User, (user) => user.agendamentos)
  user: User;

  @ManyToOne(() => Employee, (employee) => employee.agendamentos)
  funcionario: Employee;

  @ManyToOne(() => Service, (service) => service.agendamentos)
  servico: Service;

  @Column({ nullable: true })
  status: string;

  @Column({ nullable: true })
  observacoes: string;
}
