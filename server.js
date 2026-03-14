const express = require('express');

const cors = require('cors');

const multer = require('multer');

const path = require('path');

const app = express();

app.use(cors());

app.use(express.json());

/* ---------- FILE UPLOAD CONFIG ---------- */

const storage = multer.diskStorage({

  destination: 'uploads/',

  filename: (req, file, cb) => {

    cb(null, Date.now() + '-' + file.originalname);

  }

});

const upload = multer({ storage });

/* ---------- HEALTH CHECK ---------- */

app.get('/', (req, res) => {

  res.send('Hari Portal Attendance Backend Running');

});

/* ---------- PUNCH IN API ---------- */

app.post('/punch-in', upload.single('selfie'), (req, res) => {

  const { latitude, longitude, employeeId } = req.body;

  res.json({

    message: 'Punch In Successful',

    employeeId,

    location: { latitude, longitude },

    selfie: req.file.filename,

    time: new Date()

  });

});

/* ---------- PUNCH OUT API ---------- */

app.post('/punch-out', (req, res) => {

  const { employeeId } = req.body;

  res.json({

    message: 'Punch Out Successful',

    employeeId,

    time: new Date()

  });

});

/* ---------- SERVER START ---------- */

app.listen(3000, '0.0.0.0', () => {

  console.log('Hari Portal Backend running on port 3000');

});
 
