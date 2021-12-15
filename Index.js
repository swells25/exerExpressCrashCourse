const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars')
const moment = require('moment');
const e = require('express');
const logger = ('./middleware/logger');
const members = require ('./Members');

const app = express();

//Init middleware
//app.use(logger);


// handlebars middleware
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


//body parser midddleware
app.use(express.json());
app.use(express.urlencoded({ extended: false })); 

// Homepage Route
app.get('/', (req, res) => res.render('index', {
    title: 'Member App',
    members
    })
);

//app.get('/', (req, res) => {
//    res.sendFile(path.join(__dirname, 'public', 'index.html'));
//});
//Set Static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));