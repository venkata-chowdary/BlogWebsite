const express=require('express')
const bodyParser=require('body-parser')

const mongoose=require('mongoose')
const session=require('express-session')
const passport=require('passport')
const passportLocalMongoose=require('passport-local-mongoose')
const encrypt=require('mongoose-encryption')
const cors = require('cors');

//Middleware

const isAuthenticated=require('./middleware/authMiddleware')

const app=express()
app.use(cors({
    origin:'http://localhost:3001',methods:'GET,POST,PUT,DELETE',credentials:true
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
    secret:"Thisisasecret.",
    resave:false,
    saveUninitialized:false
}))


app.use(passport.initialize())
app.use(passport.session())

mongoose.connect('mongodb://127.0.0.1:27017/blogDB',{
    useNewUrlParser:true
})

const userSchema=new mongoose.Schema({
    userName:String,
    email:String,
    password:String
})

const secret="Thisispasswordsecret"
userSchema.plugin(encrypt,{secret:secret,encryptedFields:['password']})

userSchema.plugin(passportLocalMongoose)

const User=new mongoose.model("User",userSchema)


passport.use(User.createStrategy())
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

app.post('/signup',(req,res)=>{
    console.log("server",req.body)
    res.status(200).json({ message: 'Received signup data on the server.' });

})


app.listen('3000',()=>{
    console.log("Server is on 3000")
})