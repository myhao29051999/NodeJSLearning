import mongoose, { Schema } from 'mongoose';

const schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  age: {
    type: Number,
    require: true
  }
})
export default mongoose.model('User', userSchema);
