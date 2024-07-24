import { IsMilitaryTime, IsString, IsNotEmpty, IsArray, IsDateString } from 'class-validator';

export class CreateSongDto {
  @IsNotEmpty()
  @IsString()
  readonly name;

  @IsNotEmpty()
  @IsMilitaryTime()
  readonly duration: Date;

  @IsNotEmpty()
  @IsArray()
  @IsString({ each: true})
  readonly artists;

  @IsDateString()
  @IsNotEmpty()
  readonly releasedDate: Date;
}
