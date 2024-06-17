
const task17 = require('../tasks/task17');

describe('task17 function', () => {
    it('for input 1', () => {
        const input = [5,18,26,30,40,6,9] ;
        expect(task17(input)).toEqual([18,26,30,40,6]);
    });

    it('for input 2', () => {
        const input = [6] ;
        expect(task17(input)).toEqual([6]);
    });

    it('for input 3', () => {
        const input = [77] ;
        expect(task17(input)).toEqual([]);
    });

    it('for input 4', () => {
        const input = [20,14,2,7,18];
        expect(task17(input)).toEqual([20,14,2,18]);
    });

    it('does not mutate the original array', () => {
        const input = [5,18,26,30,40,6,9];
        const originalInput = [...input]; 
        task17(input);
        expect(input).toEqual(originalInput); 
    });
});
