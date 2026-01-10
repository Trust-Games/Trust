// This is a simple plan for your server
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Trust Games Server is Awake!');
});

// This part handles the 1 Trillion Credit limit
app.post('/give-credits', (req, res) => {
    const amount = req.body.amount;
    if (amount > 1000000000000) {
        res.send('Error: Too many credits!');
    } else {
        res.send('Credits granted!');
    }
});

console.log("Server logic ready.");
