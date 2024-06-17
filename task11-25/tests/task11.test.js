const task11 = require('../tasks/task11');

describe('task11 function', () => {
    it('for input 1', () => {
        const input = [5,18,26,30,40,6] ;
        expect(task11(input)).toBe(40);
    });

    it('for input 2', () => {
        const input = [100,200,10,20,50,64];
        expect(task11(input)).toBe(200);
    });

    it('for input 3', () => {
        const input = [77];
        expect(task11(input)).toBe(77);
    });

    it('for input 4', () => {
        const input = [25,20,14,2,7,21];
        expect(task11(input)).toBe(25);
    });

    it('does not mutate the original array', () => {
        const input = [5,18,26,30,40,6];
        const originalInput = [...input]; 
        task11(input);
        expect(input).toEqual(originalInput); 
    });
});
