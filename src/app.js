const express= require('express');

const app= express();

app.use('/test',(req,res)=>{
    res.send("Hello from the test");
});
app.use('/',(req,res)=>{
    res.send("Hello from the server");
});

app.listen(3000,()=>{
    console.log("Server is listning at port 3000")
});