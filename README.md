  

![Screenshot from 2022-02-17 15-29-31](https://user-images.githubusercontent.com/79979477/154502653-9207058a-32c7-46f5-8de7-1dd29cccd6fa.png)





# Dolphin Bank Application :earth_africa: :dolphin: :ocean:
# [Dolphin Bank Online](https://dolphin-bank.herokuapp.com/)


## Some features of the App is still under construction !!!

## Smaller screen responsiveness will be available soon !!!. 


<br/>

## Developers Team

Robin Skladny - Backend/Frontend : [Linked In](https://www.linkedin.com/in/robin-skladny-647a1b229/)</br>


Andrejs Grocs - Frontend/Backend : [Linked In](https://www.linkedin.com/in/andrejs-grocs-andrey-detochkin-ab2106141) </br>

## :raised_hands: :pray: 
**Big Special Thanks to Natalia Maca for help in design.** [Natalia Maca Website](https://nataliamaca.com/)</br>



Feel free to contact us with your offers!

This project was made on the final project phase during the studies in Digital Career Institute.




<br/>

## Functionality Description

```
You can test the application using this data

login: dolphinuser@dolphinbank.com
password: dolphin
PIN:1234

Account number of Dolphin User is: DE07 100700000 2006223783
In case if you want to send money to your account to test the functions of the app.
Please do not take all money from there, so other users are able to check the functionality of the app too.


Or you can register a new user, and log in after it.

You are able to transfer money to another user using the Account Number.

You can see your Transaction History as a logged-in user

```


## Technical Description


During the process of creation and development of the "Dolphin Bank" project
We had used a lot of libraries, technologies and dependencies like:

 ```        
        "React"
        "Node JS"
        "Rest API"

        "bcrypt"
        "cookie-parser"
        "cors"
        "dotenv"
        "express"
        "express-validator"
        "jsonwebtoken"
        "mongoose"
        "nodemon"
        "passport"
        "passport-jwt"
        "pin-encryptor"

```
<br/>

### Description of some of the technologies and dependencies

```

All passwords and PIN codes are securely encrypted using "bcrypt",
"pin-encryptor" technologies.

"cookie-parser" storing the cookies on the client's side local storage,
and properly working for logged-in users. Also implementing
all proper functionality of cookies files.

The server is using the "dotenv" module with secured and hidden
environment variables provided to process.env.
.gitignore file is hiding .env file from uploading to Github
which makes environment variables secured and provides more
security to the server and all server data.
```




## Database

```

In this application, user is able to register and log in using
REST API technology. All data is stored on the server using the
NoSQL database type using the Mongoose Library, and its models and schemas, and also MongoDB system.


The database architecture is created with 3 routes.

User Routes - storing all data about the users

Transaction Routes - storing all data about transactions,
transaction history and provide transactions between users.

Admin Routes (under construction) - making available login
as an admin and making some advanced changes like changing the  
funds available on the user's account and canceling the transactions.
Of course, it works only with permission from senior management. 

```

## Documentation is still in progress
## ...
