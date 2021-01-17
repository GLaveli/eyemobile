const express = require('express');
const morgan = require('morgan');
const cors = require('cors');


const app = express();

const PORT = process.env.PORT || 3333;

const rotaProdutos = require('./routes/produtos');
const rotaPedidos = require('./routes/pedidos');

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

/*Rotas*/
app.use('/produtos', rotaProdutos);
app.use('/pedidos', rotaPedidos);



app.use((req, res, next) => {
  const error = new Error('Não encontrado');
  error.status = 404;
  console.log(error);
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  return res.send({
    err: {
      message: error.message,
      code: error.status
    }
  });
});


app.listen(PORT, () => {
  console.log(`Server start at PORT: ${PORT}`);
});

