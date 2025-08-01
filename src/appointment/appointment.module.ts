import { Module } from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { AppointmentController } from './appointment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Appointment } from './entities/appointment.entity';
import { EmployeeModule } from 'src/employee/employee.module';
import { ServiceModule } from 'src/service/service.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Appointment]),
    EmployeeModule,
    ServiceModule,
    UsersModule,
  ],
  controllers: [AppointmentController],
  providers: [AppointmentService],
  exports: [TypeOrmModule],
})
export class AppointmentModule {}
