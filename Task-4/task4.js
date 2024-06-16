const task4=(arr)=>{
    
    let evenSum = 0;
    let oddSum = 0;

    for (let a of arr) {
        if (a % 2 === 0) {
            evenSum += a;
        } else {
            oddSum += a;
        }
    }
    return [evenSum,oddSum];

}
  
  module.exports = task4;

  