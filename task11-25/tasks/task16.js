const task16=(str)=> {
    if (typeof str !== 'string') {
        throw new Error("Input should be a string");
    }

    for (let i = 0; i < str.length - 1; i++) {
        if (str[i] === 'a' && str[i + 1] === 'b') {
            return "AB FOUND";
        }
    }

    return "AB NOT FOUND";
};

module.exports=task16;
