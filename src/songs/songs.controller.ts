import { Controller, Get, Post, Put, Delete, Body, ParseIntPipe, HttpException, HttpStatus, Param } from '@nestjs/common';
import {SongsService} from './songs.service';
import { CreateSongDto } from './dto/create-song.dto';
@Controller('api/v1/songs')
export class SongsController {
  constructor(private SongsService: SongsService) {}
  @Get()
  findAll(): CreateSongDto[] {
    return this.SongsService.get();
  }

  @Get(':id')
  findOne(
    @Param('id', new ParseIntPipe({
      errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE,
    })) id: number,
  ): CreateSongDto {
    if (!this.SongsService.getOne(id)) {
      throw new HttpException('Song not found', HttpStatus.NOT_FOUND);
    }
    return this.SongsService.getOne(id);
  }
  @Post()
  create(@Body() CreateSongDto: CreateSongDto): CreateSongDto[] {
    return this.SongsService.create(CreateSongDto);
  }
}
