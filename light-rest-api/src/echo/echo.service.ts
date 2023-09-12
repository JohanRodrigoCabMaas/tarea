import { Injectable } from '@nestjs/common';
import { CreateEchoDto } from './dto/create-echo.dto';
import { UpdateEchoDto } from './dto/update-echo.dto';
import { Echo } from './entities/echo.entity';

@Injectable()
export class EchoService {
  echos = [] as Echo[];

  create(echo: CreateEchoDto) {
    const { word } = echo;

    const newId = this.echos.length + 1;
    const pala: Echo = {
      id: newId.toString(),
      word,
    };
    this.echos.push(pala);
    return pala;
  }

  findAll() {
    return this.echos;
  }

  findOne(id: string) {
    return this.echos.find((echo) => echo.id === id);
  }

  update(id: string, updateFields: UpdateEchoDto): Echo {
    const echo = this.findOne(id);
    const newEcho = Object.assign(echo, updateFields);
    this.echos = this.echos.map((echo) => (echo.id === id ? newEcho : echo));
    return newEcho;
  }

  remove(id: string) {
    const index = this.echos.findIndex((echo) => echo.id === id);
    this.echos.splice(index, 1);
    return this.echos;
  }
}
