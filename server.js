const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'production';
const app = express();

app.use(express.static(__dirname));

app.get('*', (req, res) => {
    res.sendFile(__dirname+'/dist/index.html');
});

app.listen(port, () => {
    console.log('Server is up! part is: ', port);
});
