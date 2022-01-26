# Everything Json Web Tokens

## JWT Authentication 

Web Dev Simplified tutorial
https://www.youtube.com/watch?v=mbsmsi7l3r4

🧠 Concepts Covered:

- Creating Node.js authentication middleware
- Using refresh tokens with JWT
- Authenticating users with JWT
- Invalidating refresh tokens to log users out
- How to use JWT securely



npm init

    packages to install
        express
        jsonwebtoken
        dotenv
        
        dev dependency - nodemon

Visual Studio Code Extensions
    REST Client


How to use jsonwebtoken
    const jwt = require('jsonwebtoken');
    jwt.sign(*payload*, *secretKey*)


## User Authentication 

Web Dev Simplified tutorial
https://www.youtube.com/watch?v=Ud5xKCYQTjM

🧠 Concepts Covered:

- What a password salt is
- How to properly hash a password
- How to store passwords
- Basic express server setup
- User login


npm packages
    express
    bcrypt

    dev dependency - nodemon

How to use bcrypt
    const bcrypt = require('bcrypt');
    bcrypt.hash(*password*, *salt*)
    bcrypt.compare(*req.body.password*, *storedPassword*)

## What is JWT and Why Should You Use JWT?

Web Dev Simplified tutorial
https://www.youtube.com/watch?v=7Q17ubqLfaM

🧠 Concepts Covered:

- What JWT is
- JWT vs Session
- The components of JWT
- How JWT is secure
- When you should use JWT
- The advantages of JWT
