const task9=require('./task9');

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
        const input1 = [4,8,12,20,6];
        const result1 = task9(input1);
        evaluate("LAST", result1);

        // Test case 2
        const input2 = [10,8,6,4,2,0];
        const result2 = task9(input2);
        evaluate("FIRST", result2);

        // Test case 3
        const input3 = [15,15];
        const result3 = task9(input3);
        evaluate("EQUAL", result3);

        // Test case 4
        const input4 = [40];
        const result4 = task9(input4);
        evaluate("EQUAL", result4);

        // Test case 5
        const input5 = [2,4,6,8,6,4,2];
        const result5 = task9(input5);
        evaluate("EQUAL", result5);

        console.log("All synchronous test cases passed.");
    } catch (error) {
        console.error("Test case failed:", error);
    }
};
testcases();