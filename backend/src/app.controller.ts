import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { ProductLine } from './schemas/productLine.schema';

@Controller()
export class AppController {
  constructor(private readonly productLineService: AppService) { }

  @Get()
  async getAll(): Promise<ProductLine[]> {
    return this.productLineService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<ProductLine> {
    return this.productLineService.getById(id);
  }

  @Post()
  async create(@Body() productLine: ProductLine): Promise<ProductLine> {
    return this.productLineService.create(productLine);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updates: Partial<ProductLine>): Promise<ProductLine> {
    return this.productLineService.update(id, updates);
  }
}
