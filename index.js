const express = require('express')
const app = express()
const port = 5000


const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://boram:1234@cluster0.e0ig4l7.mongodb.net/?retryWrites=true&w=majority')
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log('err'))


app.get('/', (req, res) => res.send('Hello World!!!!!'))

app.listen(port, () => console.log('Example app listening on port ${port}!'))