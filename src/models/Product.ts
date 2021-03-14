import { Schema, model } from 'mongoose'
import Cathegory from './Cathegory'

const schema = new Schema(
  {
    title: {
      type: String,
      trim: true,
      unique: true,
      required: true,
    },
    description: {
      type: String,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
    },
    cathegoryId: {
      type: Schema.Types.ObjectId,
      ref: Cathegory,
      required: true,
    },
    peso: {
      type: Number,
      // type: Types.Decimal128,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

export default model('Product', schema)
