import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Req,
} from '@nestjs/common';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { PetService } from './pet.service';
@Controller('pets')
// @UseGuards(JwtAuthGuard) // Exemplo: Protege todas as rotas deste controlador
export class PetController {
  constructor(private readonly petService: PetService) {}

  @Post()
  create(@Body() createPetDto: CreatePetDto, @Req() req) {
    // Em uma aplicação real, o ID viria do usuário autenticado: const userId = req.user.id;
    const userId = 1; // Placeholder
    return this.petService.create(createPetDto, userId);
  }

  @Get()
  findAll(@Req() req) {
    const userId = 1; // Placeholder: req.user.id
    return this.petService.findAll(userId);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number, @Req() req) {
    const userId = 1; // Placeholder: req.user.id
    return this.petService.findOne(id, userId);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePetDto: UpdatePetDto,
    @Req() req,
  ) {
    const userId = 1; // Placeholder: req.user.id
    return this.petService.update(id, updatePetDto, userId);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number, @Req() req) {
    const userId = 1; // Placeholder: req.user.id
    return this.petService.remove(id, userId);
  }
}
