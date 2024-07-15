const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/products', (req, res) => {
    const sql = 'SELECT * FROM Products';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.post('/checkout', (req, res) => {
    const { name, email, cart } = req.body;

    const insertUser = 'INSERT INTO Users (name, email) VALUES (?, ?)';
    db.query(insertUser, [name, email], (err, userResult) => {
        if (err) throw err;

        const userId = userResult.insertId;
        const amount = cart.reduce((sum, item) => sum + item.price, 0);

        const insertOrder = 'INSERT INTO Orders (amount, user_id) VALUES (?, ?)';
        db.query(insertOrder, [amount, userId], (err, orderResult) => {
            if (err) throw err;

            const orderId = orderResult.insertId;

            cart.forEach(item => {
                let insertOrderItem;
                if (item.category === 'Chairs') {
                    insertOrderItem = 'INSERT INTO Order_Chairs (order_id, chair_id) VALUES (?, ?)';
                } else if (item.category === 'Tables') {
                    insertOrderItem = 'INSERT INTO Order_Tables (order_id, table_id) VALUES (?, ?)';
                } else if (item.category === 'Tops') {
                    insertOrderItem = 'INSERT INTO Order_Tops (order_id, top_id) VALUES (?, ?)';
                }
                db.query(insertOrderItem, [orderId, item.id], (err) => {
                    if (err) throw err;
                });
            });

            res.json({ message: 'Order placed successfully' });
        });
    });
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});