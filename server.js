const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/project_bd', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(`MongoDB Connection Error: ${err}`));

const PORT = 3000
const app = express()

app.set('view engine', 'ejs')

const createPath = (page) => {return path.resolve(__dirname, 'ejs-views', `${page}.ejs`)};

app.listen(PORT, '127.0.0.1', (error) => {
    error ? console.log(error) : console.log(`Server running at http://127.0.0.1:${PORT}/`);
});

app.use(express.static('styles'));
app.use(express.static('images'));
app.use(express.static('scripts'));

app.get('/', (req, res) => {
    res.render(createPath('index'));
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
})