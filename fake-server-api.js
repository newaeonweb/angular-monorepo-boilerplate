const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.get('/api/ping', (req, res, next)  => {
  res.status(200).json('pong!');
});

app.post('/api/register', (req, res, next)  => {
  if (req.body.email === 'test@test.com') {
    res.status(201).json({
      status: 'success',
      token: '1234567'
    });
  } else {
    res.status(400).json({
      status: 'error'
    });
  }
});

app.post('/api/login', (req, res, next) => {
  if (req.body.email === 'test@test.com') {
    res.status(200).json({
      status: 'success',
      token: '1234567'
    });
  } else {
    res.status(400).json({
      status: 'error'
    });
  }
});

app.get('/api/status', (req, res, next)  => {
  if (!(req.headers && req.headers.authorization)) {
    return res.status(400).json({
      status: 'error',
      isAuthenticated: false,
      errorMessage: 'Missing Token'
    });
  }
  // simulate token decoding
  const header = req.headers.authorization.split(' ');
  const token = header[1];
  if (token === '1234567') {
    res.status(200).json({
        isAuthenticated: true,
        user: {
          email: 'test@test.com',
          token: '1234567'
        },
        errorMessage: null

    });
  } else {
    res.status(401).json({
      status: 'error',
      isAuthenticated: false,
      errorMessage: 'Invalid Token'
    });
  }
});

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    status: 'error',
    error: err
  });
});

app.listen(8081, () => {
  console.log('App listening on port 8081');
});
