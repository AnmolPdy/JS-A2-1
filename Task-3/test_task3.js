const task3 = require('./task3'); // 


function assertEquals(expected, actual) {
    const [expected1, expected2] = expected;
    const [actual1, actual2] = actual;

    if (expected1 === actual1 && expected2 === actual2) {
        console.log(`✅ Test passed: Expected (${expected1},${expected2}), got (${actual1},${actual2})`);
    } else {
        console.error(`❌ Test failed: Expected (${expected1},${expected2}), got (${actual1},${actual2})`);
    }
}


async function testcases() {
    // Test case 1
    const numbers1 = [3, 4, 5, 12];
    const result1=await task3(numbers1);

    assertEquals([15,2], result1);

    // Test case 2
    const numbers2 = [11];
    const result2 = await task3(numbers2);
    assertEquals([0,0], result2);

    // Test case 3
    const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const result3 = await task3(numbers3);
    assertEquals([18,3], result3);

    // Test case 4
    const numbers4 = [];
    const result4 = await task3(numbers4);
    assertEquals([0,0], result4);

   
};
testcases().then(() => {
    console.log("All async test cases passed.");
}).catch((error) => {
    console.error("Async test case failed:", error);
});
