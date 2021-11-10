
var express = require('express'),
    bodyparser = require('body-parser')

var app = express();

app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use(express.json())

const data = {"user":
[
    { 
        "name": "Jhon", 
        "age": "18",
        "email" : "jhon1@gmail.com",
        "phone": +2010045894870,
    }, 
    {   
        "name": "Ted", 
        "age": "20" ,
        "email" : "ted1@gmai.com",
        "phone": +2010045894870,
    },
]};

data.user[0].id = 1;
data.user[1].id = 2;



app.get("/userslist" , (req , res) => {

  console.log("done")
//   console.log(req.body)
    res.send(data)
})


var newuser_name = "",
    // newuser_id = "",
    newuser_age = "",
    newuser_email = "",
    newuser_phone = "";

var dataNew_user = "";

app.post("/newuser", (req , res) =>  {

        newuser_name = req.body.newUser.name;
        // newuser_id = req.body.newUser.id;
        newuser_age = req.body.newUser.age;
        newuser_email = req.body.newUser.email;
        newuser_phone = req.body.newUser.phone;

        dataNew_user = req.body.newUser;

        req.body.newUser.id =  data.user.length + 1;
        
        console.log(dataNew_user);
        data.user.push(dataNew_user);
        // console.log(data.user.length);
        // console.log("The data new user is name => " + newuser_name + " and age is => " + newuser_age + " email is " + newuser_email + " and phone is => " + newuser_phone );
        
        console.log(req.body);


})


app.delete("/user/:id" , (req , res) => {
    console.log("delet===");    

    var idWillDelete = req.params.id;

    console.log(idWillDelete);

    // for(var i = 0; i < data.user.length; i++) {
    //     if(data.user[i].id == idWillDelete) {
    //         data.user.splice(i, 1);
    //         break;
    //     }
    // }

    let ind = data.user.findIndex(x => x.id == idWillDelete)

    data.user.splice(ind, 1)

    res.send("hello" + req.params.id)
})

app.listen("5000");       




// server.listen("8020");