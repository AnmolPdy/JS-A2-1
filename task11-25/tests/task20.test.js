
const task20 = require('../tasks/task20');

describe('task20 function', () => {
    it('for input 1', () => {
        const input = [40,6,9] ;
        expect(task20(input)).toEqual("40 6 9");
    });

    it('for input 2', () => {
        const input = [6] ;
        expect(task20(input)).toEqual("6");
    });

    it('for input 3', () => {
        const input = [] ;
        expect(task20(input)).toEqual("");
    });

    it('for input 4', () => {
        const input = [20,14,2,7,18];
        expect(task20(input)).toEqual("20 14 2 7 18");
    });

   
});
