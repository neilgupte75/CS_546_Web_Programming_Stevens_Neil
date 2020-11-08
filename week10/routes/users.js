const express = require('express');
const router = express.Router();

const userData = require("../data/users");




router.get("/", async (req, res) => {
    try{
    if(req.session.users !== true){
         res.render("authentication/login");
         res.status(200);
     }
     else{
         res.redirect("/private");
     }
    }catch (e) {
        res.status(500).json({error: e});
      }
    
});

router.get("/private" , async(req, res) =>{

     //if (req.session.cookie.name !== "AuthCookie"){
     //    res.status(403).redirect("authentication/error");
       //  return
    // }
   //  else{
       try{
            let uname=req.session.username
            let info=await userData.checkusername(uname)
            res.render("authentication/private",{info:info});
            return
        } catch (e) {
            res.status(500).json({error: e});
          }
     //}
     //next()
});

router.get("/logout", async(req, res)=>{
    try{
        //let hour=10000
        //console.log(req.session.cookie)
    //req.session.cookie.expires = new Date(Date.now()-hour)
    //console.log(req.session.cookie)
    //console.log(req.session)
    //delete req.session.users
    //console.log(req.session)
    //console.log(req.session)
    req.session.destroy(function(err) {
        
        if(err){
            msg = 'Error destroying session';
            console.log(msg)
            //console.log(req.session)
        }else{
            msg = 'Session destroy successfully';
            console.log(msg)
            //console.log(req.session)
            res.render("authentication/logout");        }
    });
    
    }catch (e) {
        res.status(500).json({error: e});
      }
    
})


router.post("/login", async(req, res) =>{
    try{
    var username = req.body.username;
    var password = req.body.password;
    if(!username&&!password){
        res.render("authentication/login" , {error: "Username and password is empty"})
        res.status(401)
        return
        }
    if(!password){
        res.render("authentication/login" , {error: "Password is empty"})
        res.status(401)
        return
        }
    if(!username){
        res.render("authentication/login" , {error: "Username is empty"})
        res.status(401)
        return
        }
    if(!password){
        res.render("authentication/login" , {error: "Password is empty"})
        res.status(401)
        return
        }
    if(req.session.users!==true){
        try{
            var user = await userData.check(username,password)
            
        }
        catch(e){
            console.log("check done wrong")
        }
        

        if(!user){
            res.render("authentication/login" , {error: "Username or password is incorrect"})
            res.status(401)
            return    
        }    

        else{
            //req.session.cookie=({name:"AuthCookie",
            //_expires: null,
            //originalMaxAge: null,
            //httpOnly: true ,"info":user});
            req.session.users=true
            req.session.username=username
            res.redirect("/private");
        }
    }

    else{
        res.redirect("/private");
    }

    }catch (e) {
        res.status(500).json({error: e});
      }

});

module.exports = router;