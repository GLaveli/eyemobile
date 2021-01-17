const { Router } = require('express');

const router = Router();

router.get('/', (req, res, next) => {
  return res.status(200).json({ Message: "GET Produtos" })
});

router.post('/', (req, res, next) => {
  return res.status(200).json({ Message: "POST Produtos" })
});

router.post('/:id_produto', (req, res, next) => {
  const { id_produto } = req.params;

  if (id_produto === '1') {
    return res.status(200).json({ Message: `${id_produto} Produto diferenciado` });
  }

  return res.status(200).json({ Message: `${id_produto} Produto` });
});

router.patch('/', (req, res, next) => {
  return res.status(200).json({ Message: "PATCH Produtos" })
});

router.delete('/', (req, res, next) => {
  return res.status(200).json({ Message: "DELETE Produtos" })
});


module.exports = router;