let express = require('express');
let app = express();

app.use(express.urlencoded({
  extended: true
}))
//get spaced name from user
app.get('/', function(req,res){
  res.sendFile(__dirname + '/home.html');
});

var replaced;
app.post('/form', dataModify,(req, res) => {
  res.send(replaced)
  res.end()
})
//middleware to modify name
function dataModify(req,res,next){
  const name = req.body.username
  replaced = name.replace(/ /g, "_");
  next();
}
 
app.listen(8080, (err) => {
  if (err)
    throw err;
  console.log('listening on port 8080');
}); 




