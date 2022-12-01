const express=require('express')
const app=express()
// const session=require("express-session")
const cookieSession=require("cookie-session")
app.use(express.static("./static"))
app.use("images",express.static("/images"))
app.use(express.json())
// app.use(
//   session({
//     secret: "keyboard cat",
//     resave: false,
//     saveUninitialized: true,
//     cookie: { secure: true ,maxAge:20},
//   })
// );
app.use(
  cookieSession({
    name: "session",
    keys: [
    "my name is khan"
    ],

    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  })
);

app.get("/q",(req,res)=>{
  
    console.log("///");
   req.session.views = (req.session.views || 0) + 1;
   console.log(req.session.views);
    res.send("<h1>Adnan</h1>")
})  
app.get("/err",(req,res)=>{
    // console.log(req);
   throw new Error("Server not responding...")
})
app.get("/err/:id",(req,res)=>{  
    // console.log( res );
   throw new Error("Server not responding...")
})
app.use((err,req,res,next)=>{
    res.status(500).send(err.message)
})

app.listen(3001,()=>{
    console.log("'running'")
})    