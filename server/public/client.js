$(document).ready(readyNow);

function readyNow() {
    console.log('jq o-tay');
    $( '#equals' ).on('click', buildObjectToSend);
    $( '#plus' ).on('click', setOperand);
    $( '#minus' ).on('click', setOperand);
    $( '#divide' ).on('click', setOperand);
    $( '#multiply' ).on('click', setOperand);
    $( '#clear' ).on('click', clear);

    
}
let findId = '';

function setOperand(){
    findId = $(this).data("operator");
    console.log(findId);
    
}//end setOperand
function buildObjectToSend(){
    console.log('buildObjectToSend');
    const packToGo = {};
    packToGo.inputOne = $( '#first-number' ).val();
    packToGo.inputTwo = $( '#second-number' ).val();
    packToGo.operand = findId;
    clear();
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

function clear(){
    $( '#first-number' ).val('');
    $( '#second-number' ).val('');
    findId = '';
}