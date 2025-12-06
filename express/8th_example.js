// // create API that works upon list of object (JSON) that will create/update/delete/fetch Product 
// Product should have id(auto generated) name, price, quantity, weight, Size, Description

let express = require('express');
let bodyParser = require('body-parser');
let app = express();
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

let ROUTE_NAME = "/product";
let products = [];
let productId = 1;
// to fetch(read) data from 
// sending request http://localhost:5000/product
app.get(ROUTE_NAME, (req, res) => {
    res.json(products);
});

// to create date sending request http://localhost:5000/product
app.post(ROUTE_NAME, function (req, res) {
    let { name, price, quantity, weight, size, description } = req.body;
    let output = null;

    if (name === undefined || price === undefined || quantity === undefined || weight === undefined || size === undefined || description === undefined) {
        output = [{ 'error': 'input is missing' }];
    }
    else {
        let newProduct = {
            id: productId++,
            name: name,
            price: price,
            quantity: quantity,
            weight: weight,
            size: size,
            description: description
        }
        products.push(newProduct);
        output = [{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'product Inserted..' }]
    }
    res.json(output);
});

// to update date sending request http://localhost:5000/product
app.put(ROUTE_NAME, function (req, res) {
    let { id, name, price, quantity, weight, size, description } = req.body;
    let output = null;

    if (id === undefined || name === undefined || price === undefined || quantity === undefined || weight === undefined || size === undefined || description === undefined) {
        output = [{ 'error': 'input is missing' }];
    }
    else{
        let isUpdate= false;
        products.forEach((item,index)=>{
            if(item.id===parseInt(id))
            {
                products[index].name=name;
                products[index].price=price;
                products[index].quantity=quantity;
                products[index].weight=weight;
                products[index].size=size;
                products[index].description=description;
                isUpdate=true;
            }
        });
        if(isUpdate=== false){
            output = [{ 'error': 'no' }, { 'success': 'no' }, { 'message': 'product Not Found..' }];
        }
        else{
            output = [{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'product updated..' }];
        }
    }
    res.json(output);\
});

//to delete date from sending request http://localhost:5000/product
app.delete(ROUTE_NAME, (req, res) => {
    let id=req.body.id;
    let output=null;
    if(id===undefined){
        output=[{'error':'input is missing'}];
    }
    else{
        let isDeleted=false
        products=products.filter((item)=>{
            if(item.id!==parseInt(id)){
                return item;
            }
            else{
                isDeleted=true;
            }
        });
        if(isDeleted===false){
            output = [{ 'error': 'no' }, { 'success': 'no' }, { 'message': 'product Not Found..' }];
        }
        else{
            output = [{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'product deleted..' }];
        }
    }
    res.json(output);
});




app.listen(5000, function (error) {
    if (!error) {
        console.log("server has been started successfully");
    }
    else {
        console.log("error to start server");
    }
})
