const express = require('express');
const Data = require('./models');

const router = express.Router();

router.post('/data', async (req, res) => {
    const { name, value } = req.body;

    const newData = new Data({ name, value });
    await newData.save();

    res.status(201).send(newData);
});
router.get('/data', async (req, res) => {
    try {
        const data = await Data.find();
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send({ error: 'An error occurred while fetching data' });
    }
});

module.exports = router;