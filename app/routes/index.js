var express = require('express');
var router = express.Router();
router.get('/', function(req, res) {
 res.send('Attendance Portal Running 🚀');
});
module.exports = router;
