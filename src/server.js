const express = require('express');
const routes = require('./routes');
const morgan = require('morgan');

PORT = process.env.PORT || 3333;

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(routes);

app.use((req, res, next) => {
  const error = new Error('Rout --> Not Found');
  error.status = 404;
  next(error);
});


app.use((error, req, res, next) => {
  console.log(error);
  res.status(error.status || 500).json({ message: error.message });
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});

