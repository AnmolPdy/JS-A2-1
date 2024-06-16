const task3=(arr)=>{
    
    let count = 0;
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 3 === 0) {
            count++; 
            sum += arr[i]; 
        }
    }
    return [sum,count];

}
  
  module.exports = task3;

  