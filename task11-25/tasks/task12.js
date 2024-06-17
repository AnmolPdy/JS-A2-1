const task12=(arr)=> {
    if (arr.length === 0) {
        throw new Error("Array is empty");
    }
    const uniqueElements = new Set(arr);
    return (uniqueElements.size === 1 ? "ALLSAME" : "DIFFERENT");
};
 module.exports=task12;
