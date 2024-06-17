const task22 = (arr) => {
    if (!Array.isArray(arr)) {
        throw new Error("Input should be an array");
    }

    if (arr.length === 0) {
        throw new Error("Array should not be empty");
    }

    let maxNumber = Number.NEGATIVE_INFINITY;
    let maxIndex = -1;

    // Find the largest number and its index
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxNumber) {
            maxNumber = arr[i];
            maxIndex = i;
        }
    }

    // Remove the largest number from the array
    if (maxIndex !== -1) {
        arr.splice(maxIndex, 1);
    }

    return arr;
};

module.exports=task22;

