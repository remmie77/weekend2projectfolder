//all requires
const express = require( 'express' );
const app = express ();
const bodyParser = require( 'body-parser' );
const port = 5000;
const math = require( './modules/routes/mathRoute.js' );
//all middleware
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));
//routes
app.use('/math', math);
//server
app.listen(port, ()=> {
    console.log('listning on port ', port);
});


