const task9=(arr)=> {
    
    const first = arr[0];
    const last = arr[arr.length - 1];

    let result;
    if (first > last) {
        result = "FIRST";
    } else if (last > first) {
        result = "LAST";
    } else {
        result = "EQUAL";
    }
    return result;

};
module.exports=task9;