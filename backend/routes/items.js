const router = require('express').Router();
const Item = require('../models/item.model');

router.get('/', async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    }catch (err) {
        res.status(400).json('Error: ' + err);
    }
});

router.post('/add', async (req, res) => {
    try {
        const newItem = new Item ({
            name: req.body.name,
            description: req.body.description
        });
        await newItem.save();
        res.json('Item added.');
    }catch (err) {
        res.status(400).json('Error: ' + err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);
        res.json(item);
    }catch (err) {
        res.status(400).json('Error: ' + err);
    }
});

module.exports = router;