const express = require('express');
const app = express();

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

app.get('/posts', (req, res) => {
    res.json(posts)
})

app.get('/login', (req, res) => {
    // Authenticate User
    
})

app.listen(3000);