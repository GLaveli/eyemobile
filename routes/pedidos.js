const { Router } = require('express');

const router = Router();

router.get('/', (req, res, next) => {
  return res.status(200).json({ Message: "GET Pedidos" })
});

router.post('/', (req, res, next) => {
  return res.status(200).json({ Message: "POST Pedidos" })
});

router.post('/:id_pedido', (req, res, next) => {
  const { id_pedido } = req.params;

  if (id_pedido === '1') {
    return res.status(200).json({ Message: `${id_pedido} Pedido diferenciado` });
  }

  return res.status(200).json({ Message: `${id_pedido} Pedido` });
});

router.delete('/', (req, res, next) => {
  return res.status(200).json({ Message: "DELETE Pedidos" })
});


module.exports = router;