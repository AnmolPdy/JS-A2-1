const task23 = (sortedArray, number) => {
    if (!Array.isArray(sortedArray)) {
        throw new Error("Input should be an array");
    }

 
    if (sortedArray.length === 0) {
        return [number];
    }

    
    if (number <= sortedArray[0]) {
        sortedArray.unshift(number);
        return sortedArray;
    }

  
    if (number >= sortedArray[sortedArray.length - 1]) {
        sortedArray.push(number);
        return sortedArray;
    }

    for (let i = 0; i < sortedArray.length; i++) {
        if (number <= sortedArray[i]) {
            sortedArray.splice(i, 0, number); 
            break;
        }
    }

    return sortedArray;
};

module.exports=task23;
