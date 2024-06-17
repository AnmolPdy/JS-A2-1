
const task14 = require('../tasks/task14');

describe('task14 function', () => {
    it('for input 1', () => {
        const input = [12,13,14,15,16,17] ;
        expect(task14(input)).toBe("SEQUENCE");
    });

    it('for input 2', () => {
        const input = [4,3,2,5] ;
        expect(task14(input)).toBe("NOT");
    });

    it('for input 3', () => {
        const input = [3,4,5,6];
        expect(task14(input)).toBe("SEQUENCE");
    });

    it('for input 4', () => {
        const input = [12,11,10];
        expect(task14(input)).toBe("NOT");
    });

    it('for input 5', () => {
        const input = [6];
        expect(task14(input)).toBe("SEQUENCE");
    });

    it('for input 6', () => {
        const input = [34,35];
        expect(task14(input)).toBe("SEQUENCE");
    });

    it('for input 7', () => {
        const input = [1,1,2,3];
        expect(task14(input)).toBe("NOT");
    });

    it('does not mutate the original array', () => {
        const input = [12,13,14,15,16,17];
        const originalInput = [...input]; 
        task14(input);
        expect(input).toEqual(originalInput); 
    });
});
