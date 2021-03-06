require('dotenv').config();

const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

app.use(express.json());

const posts = [
    {
        username: "Ken",
        title: "post 1"
    },
    {
        username: "Bob",
        title: "post 2"
    }
]

const users = []

app.get('/users', (req, res) => {
    res.json(users)
})

app.post('/users', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = { name: req.body.name, password: hashedPassword }
        users.push(user);
        res.status(201).send();
    } catch {
        res.status(500).send();
    }
})

// app.post('/users/login', async (req, res)=>{
//     const user = users.find(user => user.name = req.body.name);
//     if (user == null){
//         return res.status(400).send();
//     }
//     try {
//        if(await bcrypt.compare(req.body.password, user.password)){
//            res.send('Success');
//        } else {
//            res.send('Not allowed');
//        }
//     } catch {
//         res.status(500).send()
//     }
// })

app.get('/posts', authenticateToken, (req, res) => {
    res.json(posts.filter(post => post.username === req.user.name));
})

app.post('/login', async (req, res)=>{
    const user = users.find(user => user.name = req.body.name);
    if (user == null){
        return res.status(400).send();
    }
    try {
       if(await bcrypt.compare(req.body.password, user.password)){
            const username = req.body.name;
            const user = {name: username};
            const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
            res.json({ accessToken: accessToken })
       } else {
           res.send('Not allowed');
       }
    } catch {
        res.status(500).send()
    }
    
    
})

//adding middleware to authenticate jwt
function authenticateToken(req, res, next){
    //get the token from the request 
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if( token == null) return res.sendStatus(401)

    //verify this is the correct user
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403)
        req.user = user;
        next()
    })
    //return the user to the correct route

}

app.listen(3000);