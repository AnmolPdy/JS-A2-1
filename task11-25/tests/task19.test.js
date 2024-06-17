
const task19 = require('../tasks/task19');

describe('task19 function', () => {
    it('for input 1', () => {
        const input = [40,6,9] ;
        expect(task19(input)).toEqual("9 6 40");
    });

    it('for input 2', () => {
        const input = [6] ;
        expect(task19(input)).toEqual("6");
    });

    it('for input 3', () => {
        const input = [] ;
        expect(task19(input)).toEqual("");
    });

    it('for input 4', () => {
        const input = [20,14,2,7,18];
        expect(task19(input)).toEqual("18 7 2 14 20");
    });

   
});
