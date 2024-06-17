const task25 = (array1, array2) => {
    if (!Array.isArray(array1) || !Array.isArray(array2)) {
        throw new Error("Both inputs should be arrays");
    }

    const resultArray = [];
    const maxLength = Math.max(array1.length, array2.length);

    for (let i = 0; i < maxLength; i++) {
        if (i < array1.length) {
            resultArray.push(array1[i]);
        }
        if (i < array2.length) {
            resultArray.push(array2[i]);
        }
    }

    return resultArray;
};

module.exports=task25;
