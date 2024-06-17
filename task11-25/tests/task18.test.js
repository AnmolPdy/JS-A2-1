
const task18 = require('../tasks/task18');

describe('task18 function', () => {
    it('for input 1', () => {
        const input = [5,18,26,30,40,6,3] ;
        expect(task18(input)).toEqual([6,40,30,26,18]);
    });

    it('for input 2', () => {
        const input = [6] ;
        expect(task18(input)).toEqual([6]);
    });

    it('for input 3', () => {
        const input = [77] ;
        expect(task18(input)).toEqual([]);
    });

    it('for input 4', () => {
        const input = [20,14,2,7,18];
        expect(task18(input)).toEqual([18,2,14,20]);
    });

    it('does not mutate the original array', () => {
        const input = [5,18,26,30,40,6,3];
        const originalInput = [...input]; 
        task18(input);
        expect(input).toEqual(originalInput); 
    });
});
