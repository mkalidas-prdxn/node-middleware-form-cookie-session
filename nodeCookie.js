let express = require('express');
let cookieParser = require('cookie-parser');
let app = express()
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('This is the home page');
});

//JSON object 
let users = {
  name: "Kalidas",
  Age: "22"
}

//adding cookie 
app.get('/setuser', (req, res) => {
  res.cookie("userData", users);
  res.send('user data added to cookie');
});
 
app.get('/getuser', (req, res) => {
  //show cookies 
  res.send(req.cookies);
});

//destroy cookie 
app.get('/logout', (req, res) => {
  res.clearCookie('userData');
  res.send('user logout successfully');
});

 
app.listen(8000, (err) => {
  if (err)
    throw err;
  console.log('listening on port 8000');
}); 
