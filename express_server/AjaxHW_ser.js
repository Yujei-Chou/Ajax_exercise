#!/usr/bin/env node

// include `express`
const express = require('express')

// create an express, aka web server, instance
const app = express()

const port = 8217


// start the server
app.listen(port, () => {
  console.log(`listening on port: ${port}`)
})


app.use(express.static(`${__dirname}/dist_AjaxHW`))



const fs = require('fs');
let students = JSON.parse(fs.readFileSync('students.json'))


app.get('/list-all', (req, res) => {
  let htmlStr = ""
  for(let i=0; i<Object.keys(students).length; i++)
  {
    htmlStr += "\"" + Object.keys(students)[i] + "\":\"" + Object.values(students)[i] + "\"<br>"
  }
 
  res.send(htmlStr)
})

app.get('/search-ID', (req, res) => {
  res.send(`Hello, ${students[req.query.searchID]}`)
})


app.get('/add-ID', (req, res) => {
  students[req.query.addID] = req.query.addName
  res.send('add studentID')
})

app.get('/delete-ID', (req, res) => {
  delete students[req.query.deleteID]
  res.send('delete studentID')
})


