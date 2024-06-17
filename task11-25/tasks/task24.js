const task24 = (array1, array2) => {
    if (!Array.isArray(array1) || !Array.isArray(array2)) {
        throw new Error("Both inputs should be arrays");
    }

    return array1.concat(array2);
};
module.exports=task24;
