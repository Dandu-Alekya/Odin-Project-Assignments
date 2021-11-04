function removeFromArray(...values) {
    const arr1=values[0];
    const result=[];
    arr1.forEach((i) => {
        if(!values.includes(i)){
            result.push(i);
        }
    });
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
