const express = require('express')
const app = express()
const crypto = require('crypto');
const bodyParser = require('body-parser')
const port = 3000;

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

function hash(string) {
    const hashPwd = crypto.createHash('sha256').update(string).digest('hex');
    return hashPwd;
}

app.use(function (req, res) {
    const hashPwd = hash(JSON.stringify(req.body));
    res.send(JSON.stringify(hashPwd));
    next();
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});