import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductLine } from './schemas/productLine.schema';

@Injectable()
export class AppService {
  constructor(
    @InjectModel('ProductLine') private productLineModel: Model<ProductLine>
  ) { }

  async getAll(): Promise<ProductLine[]> {
    return this.productLineModel.find().exec();
  }

  async getById(id: string): Promise<ProductLine> {
    return this.productLineModel.findById(id).exec();
  }

  async create(productLine: ProductLine): Promise<ProductLine> {
    const createdProductLine = new this.productLineModel(productLine);
    return createdProductLine.save();
  }

  async update(id: string, updates: Partial<ProductLine>): Promise<ProductLine> {
    return this.productLineModel.findByIdAndUpdate(id, updates, { new: true }).exec();
  }

}
