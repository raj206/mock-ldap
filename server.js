const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send('Welcome to Evocalize!');
} );
app.listen(3005, ()=>{console.log('Running on port 3005')});