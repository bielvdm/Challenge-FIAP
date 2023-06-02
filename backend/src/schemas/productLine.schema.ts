import { Schema, Document } from 'mongoose';

export interface ProductLine extends Document {
  name: string;
  sustainableResources: number;
  energyConsumption: number;
  waterConsumption: number;
  responsibleSupply: string[];
  communitySupport: string[];
  data: Date
}

export const ProductLineSchema = new Schema<ProductLine>({
  name: { type: String, required: true },
  sustainableResources: { type: Number, default: 0 },
  energyConsumption: { type: Number, default: 0 },
  waterConsumption: { type: Number, default: 0 },
  responsibleSupply: { type: [String], default: [] },
  communitySupport: { type: [String], default: [] },
  data: { type: Date, default: new Date() }
});