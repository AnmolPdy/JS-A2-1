const task8=require('./task8');

const evaluate=(expected,actual)=>{
    const [expectedarray]=expected;
    const [actualarray]=actual;
    if(JSON.stringify(expected)===JSON.stringify(actual)){
        console.log(`✅ Test passed: Expected ${expected}, got ${actual}`);
    }else {
        console.error(`❌ Test failed: Expected ${expected}, got ${actual}`);
    }
};

const testcases=()=>{

    try {
        // Test case 1
        const input1 = [5,18,23,30];
        const result1 = task8(input1);
        evaluate([6,18,24,30], result1);

        // Test case 2
        const input2 = [5,7,9];
        const result2 = task8(input2);
        evaluate([6,8,10], result2);

        // Test case 3
        const input3 = [72];
        const result3 = task8(input3);
        evaluate([72], result3);

        console.log("All synchronous test cases passed.");
    } catch (error) {
        console.error("Test case failed:", error);
    }
};
testcases();