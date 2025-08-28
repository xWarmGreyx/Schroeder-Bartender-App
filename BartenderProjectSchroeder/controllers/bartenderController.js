const express = require('express');
const router = express.Router();
const menuModel = require('../models/menuModel');
const orderingModel = require('../models/orderingModel');

router.get('/queue', (req, res) => {
    res.sendFile('bartenderView.html', { root: 'views' });
});

router.get('/queue-data', async (req, res) => {
    const orders = await orderingModel.getOrders();
    const readyOrders = await orderingModel.getReadyOrders();
    const menu = await menuModel.getMenu();
    res.json({ orders, readyOrders, menu });
});

router.get('/complete/:id', async (req, res) => {
    await orderingModel.completeOrder(parseInt(req.params.id));
    res.redirect('/bartender/queue');
});

router.get('/pickup/:id', async (req, res) => {
    await orderingModel.pickupOrder(parseInt(req.params.id));
    res.redirect('/bartender/queue');
});

module.exports = router;