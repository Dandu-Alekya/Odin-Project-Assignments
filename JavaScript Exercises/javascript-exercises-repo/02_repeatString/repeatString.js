function repeatString(val,n) {
    if(n>0 && val!=' '){
    let res=val;
    for(let i=0;i<n-1;i++)
        res+=val;
    return res;
    }
    else if(n<0)
        return "ERROR";
    else if(n===0)
        return '';

    return ' ';

};

// Do not edit below this line
module.exports = repeatString;
