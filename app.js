const express = require('express')

const app = express()
const satelize = require('satelize')
const port = 8080
// satelize.satelize({ip: ''},function(err,payload){
//     // console.log(payload);
// })


app.listen(8080)
app.set('view engine', 'ejs')
const requestIp = require('request-ip');

app.get('/',(req,res) => {
    res.render('index')
    console.log(req.ip);
})

 // In your js file (e.g. app.js)

app.use((req,res) => {
    res.status(404).render('404')
})