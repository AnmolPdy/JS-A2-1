const task17=(arr)=> {
    if (!Array.isArray(arr)) {
        throw new Error("Input should be an array");
    }

    const evenNumbers = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenNumbers.push(arr[i]);
        }
    }

    return evenNumbers;
};
module.exports=task17;
