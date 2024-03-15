import express from 'express';

const app = new express();

app.get('/', (req, res) => {
  res.send('Hello wwww 1111 ddđ  vvv');
});

app.listen(9999, () => {
  console.log("App listening on port 3000!")
});

