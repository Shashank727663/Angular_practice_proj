const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 8080;

const cors = require('cors');
app.use(cors());

// listen to port 

app.use(express.json());


// / register

app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.post('/register', (req, res) => {
    console.log(req.body);
    res.status(200).send({ message: 'Data received' });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});





