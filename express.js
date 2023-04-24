const { readFile } = require('fs').promises;
const express = require("express");
const app = express();
const path = require('path')
const port = 3008 

//adds the css style sheet to the html files
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', async(req, res) => {
    console.log("loading..")
    res.send(await readFile('./index.html', 'utf-8'))
    // res.redirect('index.html');
})
app.listen(port, () => {
    console.log(`Example app running on port http://localhost:${port}`)
})