//this is a route
//requires
const express = require( 'express' )
const router = express.Router();
const doMath = require('../mathModule');

//middleware

//routes
router.post('/', ( request, response ) => {
    console.log('hit math post route');
    console.log(' request.body ', request.body);
    result = {}
    result.solution = doMath( request.body.inputOne, request.body.inputTwo, request.body.operand);
    
    response.send(result);
});
//export
module.exports = router;





