
const task15 = require('../tasks/task15');

describe('task15 function', () => {
    it('for input 1', () => {
        const input = [2,3,4,5,6,7] ;
        expect(task15(input)).toBe("ALTERNATING");
    });

    it('for input 2', () => {
        const input = [4,9,16,25,49] ;
        expect(task15(input)).toBe("NOT");
    });

    it('for input 3', () => {
        const input = [3,4,5,6];
        expect(task15(input)).toBe("NOT");
    });

    it('for input 4', () => {
        const input = [4,5,6,7,8,9,10];
        expect(task15(input)).toBe("ALTERNATING");
    });

    it('for input 5', () => {
        const input = [10];
        expect(task15(input)).toBe("ALTERNATING");
    });

    it('for input 6', () => {
        const input = [7];
        expect(task15(input)).toBe("NOT");
    });

    it('for input 7', () => {
        const input = [12,25];
        expect(task15(input)).toBe("ALTERNATING");
    });

    it('does not mutate the original array', () => {
        const input = [2,3,4,5,6,7];
        const originalInput = [...input]; 
        task15(input);
        expect(input).toEqual(originalInput); 
    });
});
