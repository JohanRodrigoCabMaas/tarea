import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EchoService } from './echo.service';
import { CreateEchoDto } from './dto/create-echo.dto';
import { UpdateEchoDto } from './dto/update-echo.dto';

@Controller('echo')
export class EchoController {
  constructor(private readonly echoService: EchoService) {}

  @Post()
  create(@Body() newWord: CreateEchoDto) {
    return this.echoService.create(newWord);
  }

  @Get()
  findAll() {
    return this.echoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.echoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFields: UpdateEchoDto) {
    return this.echoService.update(id, updateFields);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.echoService.remove(id);
  }
}
