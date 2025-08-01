import {
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreatePetDto {
  @IsString({ message: 'O nome deve ser uma string.' })
  @IsNotEmpty({ message: 'O nome não pode estar vazio.' })
  nome: string;

  @IsString({ message: 'A espécie deve ser uma string.' })
  @IsNotEmpty({ message: 'A espécie não pode estar vazia.' })
  especie: string;

  @IsString({ message: 'A raça deve ser uma string.' })
  @IsNotEmpty({ message: 'A raça não pode estar vazia.' })
  raca: string;

  @IsDateString(
    {},
    { message: 'A data de nascimento deve estar no formato de data válido.' },
  )
  @IsNotEmpty({ message: 'A data de nascimento não pode estar vazia.' })
  dataNascimento: Date;

  @IsString({ message: 'As observações devem ser uma string.' })
  @IsOptional()
  observacoes?: string;
}
