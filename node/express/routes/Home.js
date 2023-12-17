const express = require('express');
const router = express.Router();

router.get('/home', (req, res) => {
    res.send("home");
})
router.get('/index', (req, res) => {
    res.send("index");
});

module.exports = router;