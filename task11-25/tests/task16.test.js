
const task16 = require('../tasks/task16');

describe('task16 function', () => {
    it('for input 1', () => {
        const input = 'javascript' ;
        expect(task16(input)).toBe("AB NOT FOUND");
    });

    it('for input 2', () => {
        const input = 'TESTabcdef' ;
        expect(task16(input)).toBe("AB FOUND");
    });

    it('for input 3', () => {
        const input = 'acbcadbd';
        expect(task16(input)).toBe("AB NOT FOUND");
    });

    it('for input 4', () => {
        const input = 'bat+ball';
        expect(task16(input)).toBe("AB NOT FOUND");
    });

    it('for input 5', () => {
        const input = 'nicebaby';
        expect(task16(input)).toBe("AB FOUND");
    });

});
