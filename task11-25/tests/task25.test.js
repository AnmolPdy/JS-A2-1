
const task25 = require('../tasks/task25');

describe('task25 function', () => {
    it('for input 1', () => {
        const [array1,array2] = [[5,18,26,30],[101,102]];
        const expectedArray = [5,101,18,102,26,30];
        const result = task25(array1,array2);
        expect(result).toEqual(expectedArray);
    });

    it('for input 2', () => {
        const [array1,array2] = [[1,2],[20,50,60,70]];
        const expectedArray = [1,20,2,50,60,70];
        const result = task25(array1,array2);
        expect(result).toEqual(expectedArray);
    });

    it('for input 3', () => {
        const [array1,array2] = [[],[1,2,3]];
        const expectedArray = [1,2,3];
        const result = task25(array1,array2);
        expect(result).toEqual(expectedArray);
    });

    it('for input 4', () => {
        const [array1, array2] = [[2,4,6,8],[]];
        const expectedArray = [2,4,6,8];
        const result = task25(array1,array2);
        expect(result).toEqual(expectedArray);
    });

    
});
