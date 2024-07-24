import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateSongDto } from './dto/create-song.dto';
@Injectable()
export class SongsService {
  private readonly db: CreateSongDto[] = [];

  create(song: CreateSongDto): CreateSongDto[] {
    if (song instanceof CreateSongDto){
    this.db.push(song);
    }
    else{
        throw new HttpException('incomplete content', HttpStatus.PARTIAL_CONTENT)
    }
    return this.db;
  }

  get(): CreateSongDto[] {
    return this.db;
  }

  getOne(id: number):  CreateSongDto {
    return this.db[0];
  }
}

