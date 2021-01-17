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

  mysql.getConnection((err, conn) => {

    if (err)
      return res.status(500).json({ Message: err });

    conn.query(
      `select * from product where id_product = ?`,
      [id_produto],
      (err, rows) => {

        if (err)
          return res.status(500).json({ Error: err });


        if (rows.length === 0)
          return res.status(200).json({ response: "Produto não existente" });


        return res.status(200).json({ response: rows });
      }
    );
  });

});

router.patch('/', (req, res, next) => {
  const { id_produto, name, price } = req.body;

  mysql.getConnection((err, conn) => {

    if (err)
      return res.status(500).json({ Message: err });

    conn.query(
      `update product set name = ?, price = ? where id_product = ?`,
      [name, price, id_produto],
      (err, rows) => {

        if (err)
          return res.status(500).json({ Error: err });


        if (rows.length === 0)
          return res.status(200).json({ response: "Produto não existente" });


        return res.status(202).json({ response: 'Produto alterado com sucesso' });
      }
    );
  });
});

router.delete('/', (req, res, next) => {
  const { id_produto, name, price } = req.body;

  mysql.getConnection((err, conn) => {

    if (err)
      return res.status(500).json({ Message: err });

    conn.query(
      `delete from product where name = ?, price = ? where id_product = ?`,
      [id_produto],
      (err, rows) => {

        if (err)
          return res.status(500).json({ Error: err });

        if (rows.length === 0)
          return res.status(200).json({ response: "Produto não existente" });

        return res.status(202).json({ response: 'Produto removido com sucesso' });
      }
    );
  });
});


module.exports = router;