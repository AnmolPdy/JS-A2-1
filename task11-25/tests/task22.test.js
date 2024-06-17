
const task22 = require('../tasks/task22');

describe('task22 function', () => {
    it('for input 1', () => {
        const input = [5,18,26,30,40,6] ;
        expect(task22(input)).toEqual([5,18,26,30,6]);
    });

    it('for input 2', () => {
        const input = [100,10,20,50,64,200] ;
        expect(task22(input)).toEqual([100,10,20,50,64]);
    });

    it('for input 3', () => {
        const input = [77] ;
        expect(task22(input)).toEqual([]);
    });

    it('for input 4', () => {
        const input = [25,20,14,2,7,21];
        expect(task22(input)).toEqual([20,14,2,7,21]);
    });

    
});
