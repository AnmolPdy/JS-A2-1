const task13=(arr)=> {
    if (arr.length === 0) {
        throw new Error("Array is empty");
    }

    return arr.filter(element => 
        element % 2 === 0 || element % 3 === 0 || element % 5 === 0 || element % 7 === 0
    ).length;
};

module.exports=task13;
