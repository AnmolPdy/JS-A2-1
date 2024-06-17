const task15=(arr)=>{
    if (arr.length === 0) {
        console.log("NOT");
        return;
    }

    for (let i = 0; i < arr.length; i++) {
        if ((i % 2 === 0 && arr[i] % 2 !== 0) || (i % 2 !== 0 && arr[i] % 2 === 0)) {
            return("NOT");
        }
    }

    return("ALTERNATING");
}

module.exports=task15;