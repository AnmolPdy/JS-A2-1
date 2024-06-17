
const task23 = require('../tasks/task23');

describe('task23 function', () => {
    it('for input 1', () => {
        const [numarray,num] = [[5,18,26,30,40], 6];
        const expectedArray = [5,6,18,26,30,40]        ;
        const result = task23(numarray,num);
        expect(result).toEqual(expectedArray);
    });

    it('for input 2', () => {
        const [numarray,num] = [[10,20,50,64],99];
        const expectedArray = [10,20,50,64,99];
        const result = task23(numarray,num);
        expect(result).toEqual(expectedArray);
    });

    it('for input 3', () => {
        const [numarray,num] = [[5],7];
        const expectedArray = [5,7];
        const result = task23(numarray,num);
        expect(result).toEqual(expectedArray);
    });

    it('for input 4', () => {
        const [numarray, num] = [[5],2];
        const expectedArray = [2,5];
        const result = task23(numarray,num);
        expect(result).toEqual(expectedArray);
    });

    
});
