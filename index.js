if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express')
const app = express()


const path = require('path');
const serveStatic = require('serve-static');
const publicPath = path.join(__dirname,
'public');
app.use(serveStatic(publicPath));




app.use((req, res, next) => {
  console.log(req.path);
  next();
 });

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



app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
