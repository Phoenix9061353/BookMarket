const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');

const authRoute = require('./routes/authRoutes');
const bookRoute = require('./routes/bookRoutes');
const userRoute = require('./routes/userRoutes');
const bookingRoute = require('./routes/bookingRoutes');
const reviewRoute = require('./routes/reviewRoutes');
const errorController = require('./contollers/errorController');

const app = express();
/////////////////////////////////////////
//Global middleware
app.enable('trust proxy');
// app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.options('*', cors());
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'", 'data:', 'blob:', 'https:', 'ws:'],
      connectSrc: ["'self'"],
      frameSrc: ["'self'"],
      childSrc: ["'self'"],
      scriptSrc: ["'self'"],
      styleSrc: ["'self'"],
      fontSrc: ["'self'"],
      imgSrc: ["'self'"],
      baseUri: ["'self'"],
    },
  })
);

app.use(compression());
/////////////////////////////////////////
//Routes
app.use('/bookapi/v1/auth', authRoute);
app.use('/bookapi/v1/books', bookRoute);
app.use('/bookapi/v1/users', userRoute);
app.use('/bookapi/v1/bookings', bookingRoute);
app.use('/bookapi/v1/reviews', reviewRoute);

app.all('*', (req, res, next) => {
  return res.status(404).json({
    status: 'fail',
    message: '此路徑不存在！',
  });
});
app.use(errorController);
/////////////////////////////////////////
module.exports = app;