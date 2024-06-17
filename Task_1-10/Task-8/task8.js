const task8=(arr)=>{
    const modified_arr=arr.map(num=>{
        if(num%2!==0){
            return num+1;
        }else{
            return num;
        }
    });

    return modified_arr;
}
module.exports=task8;