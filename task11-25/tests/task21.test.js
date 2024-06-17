
const task21 = require('../tasks/task21');

describe('task21 function', () => {
    it('for input 1', () => {
        const [names, nameToRemove] = [['Jack','Bob','Ed','Steve'], 'Bob'];
        const expectedArray = ["Jack", "Ed", "Steve"];
        const result = task21(names, nameToRemove);
        expect(result).toEqual(expectedArray);
    });

    it('for input 2', () => {
        const [names, nameToRemove] = [['Jack','Bob','Ed','Steve'],	'Jack'];
        const expectedArray = ['Bob','Ed','Steve'];
        const result = task21(names, nameToRemove);
        expect(result).toEqual(expectedArray);
    });

    it('for input 3', () => {
        const [names, nameToRemove] = [['Jack','Bob','Ed','Steve'],	'Steve'];
        const expectedArray = ["Jack",'Bob', "Ed"];
        const result = task21(names, nameToRemove);
        expect(result).toEqual(expectedArray);
    });

    it('for input 4', () => {
        const [names, nameToRemove] = [['Jack','Bob','Ed','Steve'],	'Bill'];
        const expectedArray = ["Jack",'Bob', "Ed", "Steve"];
        const result = task21(names, nameToRemove);
        expect(result).toEqual(expectedArray);
    });

    it('for input 5', () => {
        const [names, nameToRemove] = [['Jack'],'Jack'];
        const expectedArray = [];
        const result = task21(names, nameToRemove);
        expect(result).toEqual(expectedArray);
    });

    
});
