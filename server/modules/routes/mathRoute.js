//this is a route
//requires
const express = require( 'express' )
const router = express.Router();
const doMath = require('../mathModule');
let result = {};

//middleware

//routes
router.post('/', ( request, response ) => {
    console.log( 'hit math post route' );
    console.log( 'math route request.body ', request.body );
    result.solution = doMath( request.body.inputOne, request.body.inputTwo, request.body.operand);
    response.sendStatus(201);
});
//export
router.get('/', ( request, response ) =>{
    console.log('math GET hit');
    response.send( result );
});


module.exports = router;





