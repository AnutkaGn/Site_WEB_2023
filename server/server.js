const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/index')
const PORT = 3000
const db = 'mongodb+srv://MaxKorop:ObSn6adbUaegKRyk@cluster0.gmaomsf.mongodb.net/Project_DB?retryWrites=true&w=majority'
const app = express()

mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected'))
.catch((err) => {console.log(`MongoDB Connection Error: ${err}`)})

app.use(express.urlencoded({ extended: false }))

app.use('/', router)
app.set('view engine', 'ejs')

app.use(express.static('styles'));
app.use(express.static('images'));
app.use(express.static('scripts'));

app.use((req, res) => {
    res.redirect('/') 
})

app.listen(PORT, '127.0.0.1', (error) => {
    error ? console.log(error) : console.log(`Server running at http://127.0.0.1:${PORT}/`);
});
// app.get('/user', (req, res) => {
//     const {username, password} = JSON.parse(req.query.user)
//     Users
//         .find({username: username, password:password})
//         .then((user) => {
//             res.render(createPath('index'), {returnedConcerts, checkedTypes, user}, (err, html) => {
//                 if (err) {
//                     console.error(err);
//                     res.status(500).send('Internal Server Error');
//                   } else {
//                     res.send(html);
//                   }
//             })
//         })
//         .catch((error) => {console.log(error)});
// })

// app.post('/signUp', (req, res) => {
//     const {username, password, email} = JSON.parse(req.body)
//     Users
//         .save({username: username, password:password, email: email})
//         .then((user) => {
//             res.send(true)
//         })
//         .catch((error) => {console.log(error)});
// })