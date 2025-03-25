const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
    res.send('Hello Express JS');
});

app/get('/', (req, res) => {
    res.send('Hello IT Students');
});

app.listen(port, () => {
    console.log(`Server is running on: ${port}`);
});

// npm init
// npm install express