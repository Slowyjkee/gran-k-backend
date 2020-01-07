const express = require('express');

const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;

const app = express();

const bodyParser = require('body-parser')

require('dotenv/config');

app.use(bodyParser.json());

app.listen(3001, () => {
    console.log('app listening')
});

app.get('/', (req, res) => {
    res.send('u are on home, hommie')
})

const productsRoute = require('./routes/products');

app.use('/products', productsRoute);

async function start() {
    try {
        await mongoose.connect(process.env.DB_CONNECTION,  {
            useNewUrlParser:true,
            useFindAndModify:false
            }, () => console.log('connected!'))
    } catch (e) {
        console.trace(e)
    }
}

start();
