const express = require('express');
const app = express();
app.use(express.json());

// 1. Logic to give Credits (Admin Only)
app.post('/admin/give-credits', (req, res) => {
    const { userId, amount, adminToken } = req.body;
    
    // Safety check for your 1 Trillion limit
    if (amount > 1000000000000) {
        return res.status(400).json({ error: "Limit is 1 Trillion" });
    }
    
    // In a real app, we check if adminToken is valid here
    console.log(`Giving ${amount} credits to User ${userId}`);
    res.json({ success: true, message: "Credits delivered!" });
});

// 2. Logic to Ban Users
app.post('/admin/ban', (req, res) => {
    const { userId, reason } = req.body;
    console.log(`User ${userId} banned for: ${reason}`);
    res.json({ success: true });
});

app.listen(3000, () => console.log("Trust Games Server Active"));
