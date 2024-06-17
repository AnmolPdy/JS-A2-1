const task21 = (names, nameToRemove) => {
        if (!Array.isArray(names)) {
            throw new Error("Input should be an array");
        }
    
        if (typeof nameToRemove !== 'string') {
            throw new Error("Name to remove should be a string");
        }
    
        const indexToRemove = names.indexOf(nameToRemove);
        if (indexToRemove !== -1) {
            names.splice(indexToRemove, 1);
        }
    
        return names;
    };
    
module.exports=task21;
