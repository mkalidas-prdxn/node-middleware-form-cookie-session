let express = require("express")
let session = require('express-session') 
let app = express() 
	 
app.use(session({ 
	secret: 'Secret_Key', 
	resave: true, 
	saveUninitialized: true
}))
//check if logged in or not
app.get("/", function(req, res){
if(req.session.name === 'SessionActive') {
res.send('Logged in to the session')
}else{
  res.send('Login first by using /login')
}
res.end()
}) 
//login
app.get("/login", function(req, res){ 
  req.session.name = 'SessionActive'
	res.end("Session Set") 
}) 
//logout
app.get("/logout", function(req, res){ 
   req.session.destroy(function(error){ 
    if(error) {
      console.log(err);
  } res.redirect('/');
   })
}) 
app.listen(5000, function(error){ 
	if(error) throw error 
	console.log("Server created Successfully on PORT : 5000") 
}) 
