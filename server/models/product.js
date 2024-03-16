import mongoose, { Schema } from 'mongoose';

const schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  price: {
    type: Number,
    require: true
  },
  desc: {
    type: String,
    require: false
  }
});

export default mongoose.model('Product', productSchema);
