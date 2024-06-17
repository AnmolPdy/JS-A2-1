const task14=(arr)=> {
    if (arr.length === 0) {
        throw new Error("Array is empty");
    }

    

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1] + 1) {
            return ("NOT");
           
        }
    }
    return("SEQUENCE");
};
module.exports=task14;