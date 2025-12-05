// 6) create multi page website for nursery(flowers) using express js 
//         at least 6 pages 
//         developed using bootstrap

//import express
let express = require('express');
let fs = require('fs');
//create app object
let app = express();
var ErrorText = "oops, something went wrong, please try after sometime";
//create routes 
app.get("/", (req, res) => {
    // res.send("Welcome!");
    fs.readFile("../site/index.html",function(error,FileContent){
        if(error)
            res.send(ErrorText)
        else
            res.send(FileContent.toString());
    })
});

app.get("/about", (req, res) => {
    // res.send("Welcome!");
    fs.readFile("../site/about.html",function(error,FileContent){
        if(error)
            res.send(ErrorText)
        else
            res.send(FileContent.toString());
    })
});

app.get("/products", (req, res) => {
    // res.send("Welcome!");
    fs.readFile("../site/products.html",function(error,FileContent){
        if(error)
            res.send(ErrorText)
        else
            res.send(FileContent.toString());
    })
});

app.get("/gallery", (req, res) => {
    // res.send("Welcome!");
    fs.readFile("../site/gallery.html",function(error,FileContent){
        if(error)
            res.send(ErrorText)
        else
            res.send(FileContent.toString());
    })
});


app.get("/services", (req, res) => {
    // res.send("Welcome!");
    fs.readFile("../site/services.html",function(error,FileContent){
        if(error)
            res.send(ErrorText)
        else
            res.send(FileContent.toString());
    })
});

app.get("/services", (req, res) => {
    // res.send("Welcome!");
    fs.readFile("../site/services.html",function(error,FileContent){
        if(error)
            res.send(ErrorText)
        else
            res.send(FileContent.toString());
    })
});

app.get("/contact", (req, res) => {
    // res.send("Welcome!");
    fs.readFile("../site/contact.html",function(error,FileContent){
        if(error)
            res.send(ErrorText)
        else
            res.send(FileContent.toString());
    })
});

app.use((req, res) => {
    fs.readFile("../site/404.html",function(error,FileContent){
        if(error)
            res.send(ErrorText)
        else
            res.send(FileContent.toString());
    })
});


app.listen(5000, function (error) {
    if (!error)
        console.log('server has been started successfully...');
    else
        console.log('error in starting server');
});
