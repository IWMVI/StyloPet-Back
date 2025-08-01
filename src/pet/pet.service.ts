import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { Pet } from './entities/pet.entity';

@Injectable()
export class PetService {
  constructor(
    @InjectRepository(Pet)
    private readonly petRepository: Repository<Pet>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createPetDto: CreatePetDto, userId: number): Promise<Pet> {
    const user = await this.userRepository.findOneBy({ id: userId });
    if (!user) {
      throw new NotFoundException(`Usuário com ID ${userId} não encontrado.`);
    }

    const pet = this.petRepository.create({
      ...createPetDto,
      user,
    });

    return this.petRepository.save(pet);
  }

  findAll(userId: number): Promise<Pet[]> {
    return this.petRepository.find({
      where: { user: { id: userId } },
    });
  }

  async findOne(id: number, userId: number): Promise<Pet> {
    const pet = await this.petRepository.findOne({
      where: { id, user: { id: userId } },
    });
    if (!pet) {
      throw new NotFoundException(`Pet com ID ${id} não encontrado.`);
    }
    return pet;
  }

  async update(
    id: number,
    updatePetDto: UpdatePetDto,
    userId: number,
  ): Promise<Pet> {
    const pet = await this.findOne(id, userId); // Garante que o pet pertence ao usuário
    const updatedPet = this.petRepository.merge(pet, updatePetDto);
    return this.petRepository.save(updatedPet);
  }

  async remove(id: number, userId: number): Promise<void> {
    const pet = await this.findOne(id, userId);
    await this.petRepository.remove(pet);
  }
}
