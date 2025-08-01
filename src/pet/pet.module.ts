import { Module } from '@nestjs/common';
import { PetService } from './pet.service';
import { PetController } from './pet.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pet } from './entities/pet.entity';
import { User } from 'src/users/entities/user.entity';
import { AppointmentModule } from 'src/appointment/appointment.module';

@Module({
  imports: [TypeOrmModule.forFeature([Pet, User]), AppointmentModule],
  controllers: [PetController],
  providers: [PetService],
})
export class PetModule {}
