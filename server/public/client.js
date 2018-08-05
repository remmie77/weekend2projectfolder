$(document).ready(readyNow);

function readyNow() {
    console.log('jq o-tay');
    $( '#equals' ).on('click', buildObjectToSend);
    $( '.calc' ).on('click', setOperand);
}
let findId = 'plus';
function setOperand(){
    let operator = $( this ).data('operator');
    console.log(operator);
    console.log($(this.id));
    
}//end setOperand
function buildObjectToSend(){
    console.log('buildObjectToSend');
    const packToGo = {};
    packToGo.inputOne = $( '#first-number' ).val();
    packToGo.inputTwo = $( '#second-number' ).val();
    packToGo.operand = findId;
    sendEquation(packToGo);
}//end buildObjectToSend



function sendEquation(equation){
    console.log('equation', equation);
    
    $.ajax({
        method: 'post',
        url: '/math',
        data: equation
    }).then(function(response){
        console.log('success', response);
        console.log(response.solution);
        //append that cslog to UL
    }).catch(function(error){
        alert('no data');
        console.log(error);
    });
}