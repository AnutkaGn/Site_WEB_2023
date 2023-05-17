const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Concerts = require('./models/concert');
const Users = require('./models/user');

const PORT = 3000
const db = 'mongodb+srv://MaxKorop:ObSn6adbUaegKRyk@cluster0.gmaomsf.mongodb.net/Project_DB?retryWrites=true&w=majority'
const app = express()
let checkedTypes = ['all']
let returnedConcerts = []


mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected'))
.catch((err) => {console.log(`MongoDB Connection Error: ${err}`)})

app.use(express.urlencoded({ extended: false }))

app.set('view engine', 'ejs')

const createPath = (page) => {return path.resolve(__dirname, 'ejs-views', `${page}.ejs`)};

app.listen(PORT, '127.0.0.1', (error) => {
    error ? console.log(error) : console.log(`Server running at http://127.0.0.1:${PORT}/`);
});

app.use(express.static('styles'));
app.use(express.static('images'));
app.use(express.static('scripts'));

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

app.get('/types', (req, res) => {
    const types = JSON.parse(req.query.types);
    checkedTypes = types
    if ((types.length==1 && types[0]=='all') || types.length == 0){
        Concerts
        .find()
        .then((concerts) => {
            returnedConcerts = concerts
            res.render(createPath('index'), {concerts, checkedTypes}, (err, html) => {
                if (err) {
                    console.error(err);
                    res.status(500).send('Internal Server Error');
                  } else {
                    res.send(html);
                  }
            }) 
        })
        .catch((error) => {console.log(error)});
    }
    else{
        Concerts
            .find({type: {$in: types}})
            .then((concerts) => {
                returnedConcerts = concerts
                res.render(createPath('index'), {concerts, checkedTypes}, (err, html) => {
                    if (err) {
                        console.error(err);
                        res.status(500).send('Internal Server Error');
                    } else {
                        res.send(html);
                    }
                }) 
            })
            .catch((error) => {console.log(error)});
    }
})

app.get('/', (req, res) => {
    Concerts
        .find()
        .then((concerts) => {
            returnedConcerts = concerts
            res.render(createPath('index'), {concerts, checkedTypes}) 
        })
        .catch((error) => {console.log(error)});
})

app.get('/concert/:id', (req, res) => {
    Concerts
        .findById(new mongoose.Types.ObjectId(req.params.id))
        .then((concert) => {
            res.render(createPath('dram'), {concert})
        })
        .catch((error) => {console.log(error)});
})

app.use((req, res) => {
    res.render(createPath('index'));
})