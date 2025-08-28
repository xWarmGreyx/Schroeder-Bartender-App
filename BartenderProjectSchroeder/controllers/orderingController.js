const express = require('express');
const router = express.Router();
const menuModel = require('../models/menuModel');
const orderingModel = require('../models/orderingModel')

router.get('/menu', (req, res) => {
    res.sendFile('orderingView.html', { root: 'views' });
});

router.get('/menu-data', async (req, res) => {
    const menu = await menuModel.getMenu();
    res.json(menu);
});

router.post('/order', async (req, res) => {
    const { drinkId, customerName } = req.body;
    await orderingModel.addOrder(parseInt(drinkId), customerName);
    res.redirect('/ordering/menu');
});

module.exports = router;