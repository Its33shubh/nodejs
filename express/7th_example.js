// 7) create API that works upon list of object (JSON) that will create/update/delete/fetch account data.
//         account should have account id (auto generated), name, balance, mobile,email 

let express = require('express');
let bodyParser = require('body-parser'); // this complesury
const e = require('express');
//create object
let app = express();
app.use(express.urlencoded({extended:true})) // this complesury
app.use(bodyParser.json()); // this complesury

let ROUTE_NAME = "/account";
let accounts = []; 
let accountID = 1;
//http://localhost:5000/account

//get (fetch)
app.get(ROUTE_NAME,function(req,res){
    res.json(accounts);
});

// post (create)
app.post(ROUTE_NAME,function(req,res){
    //create 4 variables
    // let name = request.body.name;
    // let balance = request.body.balance;
    // let mobile = request.body.mobile;
    // let email = request.body.email;
    // OR 
    let { name, balance, mobile, email } = req.body;
    let output = null;
    if(name === undefined || balance === undefined || mobile === undefined || email === undefined){
        output =  [{ 'error': 'input missing' }];
    }
    else{
        let newAccount = {
            id: accountID++,
            name : name,
            balance:balance,
            mobile:mobile,
            email:email
        }
        accounts.push(newAccount);
        output = [{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'account inserted' }];
        
    }
    res.json(output);    
});

//put (update)
app.put(ROUTE_NAME,function(req,res){
    let { id,name, balance, mobile, email } = req.body;
    let output = null;
    if( id===undefined||name === undefined || balance === undefined || mobile === undefined || email === undefined){
        output =  [{ 'error': 'input missing' }];
    }
    else{
        let isUpdate =false;
        accounts.forEach(function(item,index){
            if(item.id === parseInt(id))
            {
                accounts[index].name = name;                
                accounts[index].balance = balance;                
                accounts[index].mobile = mobile;                
                accounts[index].email = email; 
                isUpdate=true;               
            }
        });
        if(isUpdate===false){
            output = [{ 'error': 'no' }, { 'success': 'no' }, { 'message': 'account Not Found' }];
        }
        else
        {
            output = [{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'account Updated successfully' }];
        }
    }
    res.json(output);
});


// delete (delete) 
app.delete(ROUTE_NAME,function(req,res){
    let id=req.body.id;
    let output=null;
    if( id===undefined){
        output =  [{ 'error': 'input missing' }];
    }
    else{
        let isDeleted = false
         accounts = accounts.filter(function(item){
            if(item.id !== parseInt(id))
            {
                return item;
            }
            else{
                isDeleted=true;
            }
        });
        if (isDeleted === false) {
            output = [{ 'error': 'no' }, { 'success': 'no' }, { 'message': 'account not found' }];
        }
        else {
            output = [{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'account deleted successfully' }];
        }
    }
    res.json(output);
});




app.listen(5000,function(error){
    if(!error)
        console.log("server has been started successfully...");
    else
      console.log("error in starting server");     
});
