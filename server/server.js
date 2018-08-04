//all requires
const express = require( 'express' );
const app = express ();
const bodyParser = require( 'body-parser' );
const port = 5000;
//all middleware
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));
//routes

//server
app.listen(port, ()=> {
    console.log('listning on port ', port);
});
