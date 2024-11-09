const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; 
    }
    return true; 
};

const checkPrime = (req, res) => {
    const num = parseInt(req.params.number);

    if (isNaN(num) || num <= 0) {
        return res.status(400).json({ error: 'Please provide a positive integer.' });
    }

    return res.json({ isPrime: isPrime(num) });
};

module.exports = { checkPrime };
