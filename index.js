require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const xss = require('xss-clean');
const mongoSanitize = require('express-mongo-sanitize');


const limit = rateLimit({
    max: 100,// max requests
    windowMs: 60 * 60 * 1000, // 1 Hour of 'ban' / lockout 
    message: 'Too many requests' // message to send
});

const app = express();
app.use(limit);
app.use(mongoSanitize());
app.use(xss());
app.use(express.json({ limit: '10kb' }));
app.use(bodyParser.json());
app.use(helmet());
app.use(morgan('dev'));

require('./routes/user.routes')(app);
require('./routes/post.routes')(app);
app.listen(process.env.PORT, '0.0.0.0', () => {
    console.log('[SERVER] Listening on port '+process.env.PORT);
    mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true })
        .then(() => console.log('[DB] Database connection success'))
        .catch(err => {
            console.log('[!DB] '+err);
            console.log('[!SERVER] Exiting...');
            process.exit();
        });
});
