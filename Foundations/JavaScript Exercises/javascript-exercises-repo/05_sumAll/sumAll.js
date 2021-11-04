function sumAll(n1,n2){
    if(Number.isInteger(n1) && Number.isInteger(n2) && n1>0 && n2>0){
    let sum=0;
    if(n2>n1){
        for(let i=n1;i<=n2;i++){
            sum+=i;
        }
    }
    if(n1>n2){
        for(let i=n1;i>=n2;i--){
            sum+=i;
        }
    }
    return sum;
}
    return "ERROR";

};

// Do not edit below this line
module.exports = sumAll;
