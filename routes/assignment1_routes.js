const express = require('express');
const router = express.Router();
const { fibonacciSequence } = require('../controller/assignment1_controller');

router.get('/fibonacci/:n', (req, res) => {
    const n = parseInt(req.params.n);
    const result = fibonacciSequence(n);

    if (result.error) {
        return res.status(400).json(result);
    }

    res.json(result);
});

module.exports = router;