
const task24 = require('../tasks/task24');

describe('task24 function', () => {
    it('for input 1', () => {
        const [array1,array2] = [[5,18,26,30],	[40,6]];
        const expectedArray = [5,18,26,30,40,6];
        const result = task24(array1,array2);
        expect(result).toEqual(expectedArray);
    });

    it('for input 2', () => {
        const [array1,array2] = [[100,10],[20,50,64,200]];
        const expectedArray = [100,10,20,50,64,200];
        const result = task24(array1,array2);
        expect(result).toEqual(expectedArray);
    });

    it('for input 3', () => {
        const [array1,array2] = [[],[1,2,3]];
        const expectedArray = [1,2,3];
        const result = task24(array1,array2);
        expect(result).toEqual(expectedArray);
    });

    it('for input 4', () => {
        const [array1, array2] = [[2,7,21],[]];
        const expectedArray = [2,7,21];
        const result = task24(array1,array2);
        expect(result).toEqual(expectedArray);
    });

    
});
