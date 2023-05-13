Чому наступний код не отримує нічого з бази даних: 
srver.js:
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Concert = require('./models/concert');

const PORT = 3000
const db = 'mongodb+srv://MaxKorop:ObSn6adbUaegKRyk@cluster0.gmaomsf.mongodb.net/Project_DB?retryWrites=true&w=majority'
const app = express()

mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected'))
.catch((err) => {console.log(`MongoDB Connection Error: ${err}`)});

app.set('view engine', 'ejs')

const createPath = (page) => {return path.resolve(__dirname, 'ejs-views', `${page}.ejs`)};

app.listen(PORT, '127.0.0.1', (error) => {
    error ? console.log(error) : console.log(`Server running at http://127.0.0.1:${PORT}/`);
});

app.use(express.static('styles'));
app.use(express.static('images'));
app.use(express.static('scripts'));

app.get('/', async (req, res) => {
    const concerts = await Concert
        .find()
        .then((concerts) => { 
            console.log(concerts)
            res.render(createPath('index'), {concerts}) 
        })
        .catch((error) => {console.log(error)});
})

app.get('/dram', (req, res) => {
    res.render(createPath('dram'));
})

app.get('/druzhba', (req, res) => {
    res.render(createPath('druzhba'));
})

app.get('/fila', (req, res) => {
    res.render(createPath('fila'));
})

app.use((req, res) => {
    res.render(createPath('index'));
});
concert.js:
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const concertSchema = new Schema({
    maxrow: {
        type: Number,
        required: true
    },
    maxseat:{
        type: Number,
        required: true
    },
    concertname: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    poster: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    }
});

const Concert = mongoose.model('Concerts', concertSchema);

module.exports = Concert;
при цьому в базі даних присутні записи в колекції Concerts, і Users