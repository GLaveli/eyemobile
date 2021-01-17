const { Router } = require('express');
const mysql = require('../database/mysql').pool;

const router = Router();

router.get('/', (req, res, next) => {

  mysql.getConnection((err, conn) => {

    if (err)
      return res.status(500).json({ Message: err });

    conn.query(
      'select * from product',
      (err, rows) => {
        if (err) {
          return res.status(500).json({ Error: err });
        };
        return res.status(200).json({ response: rows });
      }
    );
  });


});

router.post('/', (req, res, next) => {

  const { name, price } = req.body;

  mysql.getConnection(function (err, conn) {

    if (err)
      return res.status(500).json({ Message: err })

    conn.query(
      'INSERT INTO product (name, price) VALUES (?,?)',
      [name, price],
      (err, rows) => {

        if (err) {
          conn.release();
          console.log(err);
        }

        return res.status(201).json({ message: `Produto ${name} foi adicionado com o ID: ${rows.insertId}` })
      });
    conn.release();
  });
});

router.post('/:id_produto', (req, res, next) => {
  const { id_produto } = req.params;

  if (id_produto === '1') {
    return res.status(200).json({ Message: `${id_produto} Produto diferenciado` });
  }

  return res.status(200).json({ Message: `${id_produto} Produto` });
});

router.patch('/', (req, res, next) => {
  return res.status(200).json({ Message: "PATCH Produtos" });
});

router.delete('/', (req, res, next) => {
  return res.status(200).json({ Message: "DELETE Produtos" });
});


module.exports = router;