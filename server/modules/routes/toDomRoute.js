const express = require( 'express' )
const router = express.Router();
let result = {};

router.post( '/', ( request, response ) =>{
    console.log( 'hit domRoute POST route' );
    console.log( 'toDom route request.body ', request.body );
    result.clientInput = request.body.clientInput; 
    response.sendStatus(201);
});

router.get( '/', ( request, response ) =>{
    console.log( 'domRoute GET hit' );
    response.send( result );
})









module.exports = router
