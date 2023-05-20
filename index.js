const express = require('express')
const app = express()
const port = 80

const path = require('path');
const serveStatic = require('serve-static');
const publicPath = path.join(__dirname,
'public');
app.use(serveStatic(publicPath));






app.get('/', (req, res) => {
  res.send('Hello World!')
})
// app.post('/', (req, res) => {
  
// })
// app.put('/', (req, res) => {
  
// })
// app.delete('/', (req, res) => {
  
// })


app.get('/home', (req, res) => { 
  res.send('/home')


});

app.get('/home/*', (req, res) => { 
  res.send('/home/***')

});

app.get('/user/:id', (req, res) => {
  console.log(req.params.id);
  res.send('user id: ' + req.params.id);
 });



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
