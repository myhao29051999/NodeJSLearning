import mongoose, {Schema} from 'mongoose';

const schema = mongoose.Schema;

const orderSchema = new Schema({
  products: {type: [], required: false},
})

export default mongoose.model('Order', orderSchema);
