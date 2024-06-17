const task12 = require('../tasks/task12');

describe('task12 function', () => {
    it('for input 1', () => {
        const input = [12,13,12,12,12] ;
        expect(task12(input)).toBe("DIFFERENT");
    });

    it('for input 2', () => {
        const input = [14,14,14,14];
        expect(task12(input)).toBe("ALLSAME");
    });

    it('for input 3', () => {
        const input = [3,3,3,6];
        expect(task12(input)).toBe("DIFFERENT");
    });

    it('for input 4', () => {
        const input = [18,18];
        expect(task12(input)).toBe("ALLSAME");
    });

    it('for input 5', () => {
        const input = [6];
        expect(task12(input)).toBe("ALLSAME");
    });

    it('does not mutate the original array', () => {
        const input = [12,13,12,12,12];
        const originalInput = [...input]; 
        task12(input);
        expect(input).toEqual(originalInput); 
    });
});
