const task5=(arr)=>{
    
    let count = 0;
    let numgreaterthan21 = [];

    for (i of arr) {
        if (i>21) {
            count++;
            numgreaterthan21.push(i);
        } 
        }
    
    return {count,numgreaterthan21};

};
  
  module.exports = task5;

  