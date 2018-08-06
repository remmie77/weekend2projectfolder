$(document).ready(readyNow);

function readyNow() {
    console.log('jq o-tay');
    $( '#equals' ).on('click', buildObjectToSend );
    $( '#plus' ).on('click', setOperand );
    $( '#minus' ).on('click', setOperand );
    $( '#divide' ).on('click', setOperand );
    $( '#multiply' ).on('click', setOperand );
    $( '#clear' ).on('click', clear );
    $( '#test-message' ).on('click', sendToServer );
}
let operand = '';
let solution = null;
function setOperand(){
    operand = $(this).data("operator");
    console.log(operand);
}//end setOperand
function buildObjectToSend(){
    console.log('buildObjectToSend');
    let okToEvaluate = true;
    if ( $( '#first-number' ).val() == '' ){
        alert( 'whoopsie, you forgot the first number!' );
        okToEvaluate = false;
    }
    if ( $('#second-number').val() == ''){
        alert( 'whoopsie, you forgot the second number!' );
        okToEvaluate = false;
    }
    if ( operand === '' ){
        alert( 'you didn\'t pick an operand' );
        okToEvaluate = false;
    }
    if ( okToEvaluate == true ) {
        const packToGo = {};
        packToGo.inputOne = $( '#first-number' ).val();
        packToGo.inputTwo = $( '#second-number' ).val();
        packToGo.operand = operand;
        sendEquation(packToGo);
        clear();
    }
}//end buildObjectToSend
function sendEquation( equation ){
    console.log('equation', equation);
    $.ajax({
        method: 'post',
        url: '/math',
        data: equation
    }).then(function( response ){
        console.log('success', response );
        if( response == 'Created' ){
            getSolution();  
        }
    }).catch(function( error ){
        alert('no data');
        console.log( error );
    });
}//end sendEquation
function getSolution(){
    console.log('in getSolution ');
    $.ajax({
        method: 'get',
        url: '/math'
    //no data on a get     
    }).then(function( response ){
        console.log( 'response in getSolution ', response );
        solution = response.solution;
        $('#solution-list').append('<li class="hey">' + solution + '</li>');
    }).catch(function( error ){
        alert( 'no data' );
    });  
}//end getSolution
function clear(){
    $( '#first-number' ).val('');
    $( '#second-number' ).val('');
    operand = '';
    solution = null;
    $( '#solution-list' ).children().remove();
}
function sendToServer(){
    clientInput = $( '#something-to-display' ).val();
    const packToGo = {clientInput};
    console.log(packToGo);
    $.ajax({
        method: 'post',
        url: '/toDom',
        data: packToGo
    }).then(function( response ){
        console.log( 'success', response );
        appendToDom();
    }).catch(function( error ){
        alert( 'no data' );
        console.log( error );
    });
}//end sendToServer

function appendToDom(){
    console.log( 'in appendToDom' );
    $.ajax({
        method: 'get',
        url: '/toDom'
        //no data on a get
    }).then(function( response ){
        console.log( 'response in appendToDom', response );
        let clientSaid = response.clientInput
        $( '#thaList' ).append('<li>' + clientSaid + '</li>');
    }).catch(function( error ){
        alert( 'no data' );
    });
}