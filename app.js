const express = require('express');
const ks = require('node-key-sender');
const app = express();
const cors = require('cors');
const port = 3000;

app.use(express.json());
app.use(cors());

app.post('/testKeyboard', (req, res) => {
    const keyboardKeys = "abcdefghijklmnopqrstuvwxyz1234567890.,/;]";

    console.log('Checking Keyboard Keys');

    try {
        ks.sendText(keyboardKeys);
        console.log('All keyboards are working');
        res.status(200).json({ success: true, message: 'All keyboards are working' });
    } catch (error) {
        console.log('Error Testing Keyboard', error.message);
        console.log('Not all keyboards are working, faulty product');
        res.status(500).json({ success: false, message: 'Not all keyboards are working, faulty product' });
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
