const task11=(arr)=> {
    if (arr.length === 0) {
        throw new Error("Array is empty");
    }
    return Math.max(...arr);
};
module.exports=task11;