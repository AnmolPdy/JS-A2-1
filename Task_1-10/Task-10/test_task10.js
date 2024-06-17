const task10=require('./task10');

const evaluate=(expected,actual)=>{
    if(expected===actual){
        console.log(`✅ Test passed: Expected ${expected}, got ${actual}`);
    }else {
        console.error(`❌ Test failed: Expected ${expected}, got ${actual}`);
    }
};

const testcases=()=>{

    try {
        // Test case 1
        const arr11 = [1,2,3];
        const arr12 = [10,20,30]
        const result1 = task10(arr11,arr12);
        evaluate("Big2", result1);

        // Test case 2
        const arr21 = [1,3,5,7,9];
        const arr22= [2,4,19];
        const result2 = task10(arr21,arr22);
        evaluate("Equal", result2);

        // Test case 3
        const arr31 = [50,100];
        const arr32= [1,2,3,4,5,6];
        const result3 = task10(arr31,arr32);
        evaluate("Big1", result3);

        // Test case 4
        const arr41 = [2,4,6,8];
        const arr42= [20];
        const result4 = task10(arr41,arr42);
        evaluate("Equal", result4);

        

        console.log("All synchronous test cases passed.");
    } catch (error) {
        console.error("Test case failed:", error);
    }
};
testcases();