const factorial = (num) => {
    if (num < 0) return null;
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
};

const calculateFactorial = (req, res) => {
    const num = parseInt(req.params.number);
    if (isNaN(num) || num < 0) {
        return res.status(400).json({ error: 'Please provide a non-negative integer.' });
    }
    return res.json({ factorial: factorial(num) });
};

module.exports = { calculateFactorial };
