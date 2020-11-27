const app = require('./app.js');
// const mongoose = require('mongoose');

const port = 3000;

//Connect to MongoDB database
// mongoose
//   .connect("mongodb://localhost:27017/space", { useNewUrlParser: true })
//   .then(() => {
//Listening to port
app.listen(port, () => {
  console.log(`Server has started on port: ${port}!`)
})
  // })