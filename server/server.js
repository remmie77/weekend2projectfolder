//all requires
const express = require( 'express' );
const app = express ();
const bodyParser = require( 'body-parser' );
const port = 5000;
const math = require( './modules/routes/mathRoute.js' );
const toDom = require( './modules/routes/toDomRoute.js' );
//all middleware
//(THIS SAYS THAT WHEN LOOKING FOR A FILE START IN SERVER/PUBLIC)
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));
//routes
app.use('/math', math);
app.use('/toDom', toDom);
//server
app.listen(port, ()=> {
    console.log('listning on port ', port);
});


