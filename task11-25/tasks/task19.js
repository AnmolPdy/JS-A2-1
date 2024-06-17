const task19 = (arr) => {
    if (!Array.isArray(arr)) {
        throw new Error("Input should be an array");
    }

    let result = "";
    for (let i = arr.length - 1; i >= 0; i--) {
        result += arr[i] + " ";
    }
    
    return result.trim();
};
module.exports=task19;