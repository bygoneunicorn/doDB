const c = require('./controller')
const express = require('express')
const bodyParser = require('body-parser')

const app = express();

app.use( bodyParser.json() )


app.get(`/api/usermovies`, c.read)
app.post(`/api/usermovies`, c.create)
app.put(`/api/usermovies`, c.updateNote)
app.delete(`/api/usermovies/:id`, c.delete)


app.listen(3000, ()=> console.log("Running on local server 3000"))