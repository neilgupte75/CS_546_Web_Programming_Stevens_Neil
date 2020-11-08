const express = require('express');
const app = express();
const static = express.static(__dirname + '/public');
const session = require('express-session')


const configRoutes = require('./routes');
const exphbs = require('express-handlebars');

app.use('/public', static);
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(session({
    name: 'AuthCookie',
    secret: 'some secret string!',
    resave: false,
    saveUninitialized: true
  }))

  app.get('/private', async function(request, response,next) {
    if(request.session.users!=true){
          response.status(403).render("authentication/error")
          return
      }
    else{
          next()
        }
  });

  // app.use(function(req,res,next){
  //   if(req.originalUrl=="/private"){
  //     if(req.session.cookie.name !== "AuthCookie"){
  //     res.status(403).redirect("authentication/error")
  //     }
  //   else{
  //     next()
  //   }
  // }

  // })


  app.use(function(request, response, next) {
    date=new Date().toUTCString()
    console.log(date);
    method=request.method
    console.log(method);
    url=request.originalUrl
    console.log(url);
    if(request.session.users !== true){
      console.log("The user is not authenticated")
    }
    else{
      console.log("The user is authenticated")
    }next();
  });
  
   
  
  
configRoutes(app);

app.listen(3000, () => {
  console.log("We've now got a server!");
  console.log('Your routes will be running on http://localhost:3000');
});