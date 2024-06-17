
const task13 = require('../tasks/task13');

describe('task13 function', () => {
    it('for input 1', () => {
        const input = [10,12,14] ;
        expect(task13(input)).toBe(3);
    });

    it('for input 2', () => {
        const input = [210];
        expect(task13(input)).toBe(1);
    });

    it('for input 3', () => {
        const input = [3,4,5,6];
        expect(task13(input)).toBe(4);
    });

    it('for input 4', () => {
        const input = [11,	17,	8,	10, 21];
        expect(task13(input)).toBe(3);
    });

    it('for input 5', () => {
        const input = [1,2,3,4,5,6,7,8,9,10,11];
        expect(task13(input)).toBe(9);
    });

    it('for input 6', () => {
        const input = [11,13,17,19,23,121,169];
        expect(task13(input)).toBe(0);
    });

    it('does not mutate the original array', () => {
        const input = [10,12,14];
        const originalInput = [...input]; 
        task13(input);
        expect(input).toEqual(originalInput); 
    });
});
