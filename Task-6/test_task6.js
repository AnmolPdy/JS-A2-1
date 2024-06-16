const task6=require('./task6');

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
        const numbers1 = [2, 3, 5, 7];
        const result1 = task6(numbers1);
        evaluate([12, 13, 15, 17], result1);

        // Test case 2
        const numbers2 = [23, 25];
        const result2 = task6(numbers2);
        evaluate([33, 35], result2);

        // Test case 3
        const numbers3 = [6];
        const result3 = task6(numbers3);
        evaluate([16], result3);

        console.log("All synchronous test cases passed.");
    } catch (error) {
        console.error("Test case failed:", error);
    }
};
testcases();