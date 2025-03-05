const express = require('express');
const Data = require('./models');

const router = express.Router();

router.post('/data', async (req, res) => {
    const { name, value } = req.body;

    const newData = new Data({ name, value });
    await newData.save();

    res.status(201).send(newData);
});

module.exports = router;