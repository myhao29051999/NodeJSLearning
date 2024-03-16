import express from 'express';
import mongoose from 'mongoose';
import formidableMiddleware from 'express-formidable';
import dotenv from 'dotenv';
import routes from '../server/routes/main';

dotenv.config();
//Init
const app = new express();

// Parse JSON
app.use(formidableMiddleware());

app.use('/api', routes);

const connectDBWithRetry = mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log("MongoDB connected!");
  let server = app.listen(process.env.PORT || 3000, () => {
    console.log(`App listening on port ${server.address().port}!`);
  })
}).catch(err => {
  console.log(err);
  setTimeout(() => connectDBWithRetry, 1000);
})
