const app = require('express')();
const https = require('https');
const fs = require('fs');

//GET home route
app.get('/', (req, res) => {
    res.sendFile('send.html',{root: __dirname});
});
app.post('/data', (req, res) => {
	console.log(req.body);
	res.send('OKAY');
});

// we will pass our 'app' to 'https' server
https.createServer({
    key: fs.readFileSync('./key.pem','utf8'),
    cert: fs.readFileSync('./cert.pem','utf8'),
    passphrase: 'devbrat'
}, app)
.listen(3000);