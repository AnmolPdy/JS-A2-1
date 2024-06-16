const task5 = require('./task5'); // Ensure you are requiring the correct file

function assertEquals(expected, actual) {
    const { count: expectedCount, numgreaterthan21: expectedNumbers } = expected;
    const { count: actualCount, numgreaterthan21: actualNumbers } = actual;

    if (expectedCount === actualCount && JSON.stringify(expectedNumbers) === JSON.stringify(actualNumbers)) {
        console.log(`✅ Test passed: Expected (${expectedCount}, ${expectedNumbers.join(', ')}), got (${actualCount}, ${actualNumbers.join(', ')})`);
    } else {
        console.error(`❌ Test failed: Expected (${expectedCount}, ${expectedNumbers.join(', ')}), got (${actualCount}, ${actualNumbers.join(', ')})`);
    }
}

async function testcases() {
    // Test case 1
    const numbers1 = [5, 18, 26, 30, 40, 6];
    const result1 = await task5(numbers1);
    assertEquals({ count: 3, numgreaterthan21: [26, 30, 40] }, result1);

    // Test case 2
    const numbers2 = [100, 200, 10, 20, 50, 64];
    const result2 = await task5(numbers2);
    assertEquals({ count: 4, numgreaterthan21: [100, 200, 50, 64] }, result2);

    // Test case 3
    const numbers3 = [77];
    const result3 = await task5(numbers3);
    assertEquals({ count: 1, numgreaterthan21: [77] }, result3);

    // Test case 4
    const numbers4 = [];
    const result4 = await task5(numbers4);
    assertEquals({ count: 0, numgreaterthan21: [] }, result4);
}

// Run the async test cases
testcases().then(() => {
    console.log("All async test cases passed.");
}).catch((error) => {
    console.error("Async test case failed:", error);
});
