const task7=require('./task7');

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
        const input1 = ['Jack','Mary'];
        const result1 = task7(input1);
        evaluate(['Hello Jack','Hello Mary'], result1);

        // Test case 2
        const input2 = ['Jack'];
        const result2 = task7(input2);
        evaluate(['Hello Jack'], result2);

        // Test case 3
        const input3 = [];
        const result3 = task7(input3);
        evaluate([], result3);

        console.log("All synchronous test cases passed.");
    } catch (error) {
        console.error("Test case failed:", error);
    }
};
testcases();