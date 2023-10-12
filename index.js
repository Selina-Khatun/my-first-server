const express=require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const app=express();
const port =5000;
app.get('/',(req,res)=>{
res.send('hello from my first server')
});

app.get('/data',(req,res)=>{
    res.send('more data is coming soon.it works')
});

app.listen(port,()=>{
    console.log(`my first server is running on port:${port}`)
})