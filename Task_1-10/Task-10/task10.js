const task10=(array1, array2)=> {
    
    const sum1 = array1.reduce((acc, curr) => acc + curr, 0);

    const sum2 = array2.reduce((acc, curr) => acc + curr, 0);

    let ans;
    if (sum1 > sum2) {
        ans="Big1";
    } else if (sum2 > sum1) {
        ans="Big2";
    } else {
        ans="Equal";
    }

    return ans;
}

module.exports=task10;
