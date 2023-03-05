import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class TestDto {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsNumber()
  @IsNotEmpty()
  age!: number;
}
