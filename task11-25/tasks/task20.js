const task20 = (arr) => {
    if (!Array.isArray(arr)) {
        throw new Error("Input should be an array");
    }

    let result = "";
    while (arr.length > 0) {
        result += arr.shift() + " ";
    }

    return result.trim();
};
module.exports=task20;