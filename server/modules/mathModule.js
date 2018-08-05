function doMath(x,y,operator){
    x = parseFloat(x);
    y = parseFloat(y);
    let result;
    if(operator === 'plus'){
        result = x + y;
    }
    else if(operator === 'minus'){
        result = x - y;
    }
    else if(operator === 'divide'){
        result = x / y;
    }
    else{
        result = x * y;
    }
    return result;
}

module.exports = doMath;