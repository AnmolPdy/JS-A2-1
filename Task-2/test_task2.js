
const task2 = require('./task2'); // 


function assertEquals(expected, actual) {
    if (expected === actual) {
        console.log(`✅ Test passed: Expected ${expected}, got ${actual}`);
    } else {
        console.error(`❌ Test failed: Expected ${expected}, got ${actual}`);
    }
}


async function testcases() {
    // Test case 1
    const numbers1 = [1, 3, 4, 5, 6];
    const result1=await task2(numbers1);
    assertEquals(19, result1);

    // Test case 2
    const numbers2 = [11];
    const result2 = await task2(numbers2);
    assertEquals(11, result2);

    // Test case 3
    const numbers3 = [-1, 2, -3, 4, -5, 6, -7];
    const result3 = await task2(numbers3);
    assertEquals(-4, result3);

    // Test case 4
    const numbers4 = [];
    const result4 = await task2(numbers4);
    assertEquals(0, result4);

   
};
testcases().then(() => {
    console.log("All async test cases passed.");
}).catch((error) => {
    console.error("Async test case failed:", error);
});
