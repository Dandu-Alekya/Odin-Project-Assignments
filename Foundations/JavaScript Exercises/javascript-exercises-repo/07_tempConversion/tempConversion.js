function ftoc(temp){
  let ans=(temp-32)*(5/9);
  return (Math.round(ans*10)/10);
};

function ctof(temp){
  let ans= ((temp*1.8)+32);
  return (Math.round(ans*10)/10);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
