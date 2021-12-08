const Employee = require("../lib/employee");

describe('Employee', () => {

    describe('instantiation', () => {
        it('should pass and instantiate object correctly', () => {
            let testEmployee = new Employee('dylan', 1, 'dylanhoneyman@gmail.com');
            expect(testEmployee.name).toBe('dylan')
            expect(testEmployee.id).toBe(1)
            expect(testEmployee.email).toBe('dylanhoneyman@gmail.com')
        });
    });

    describe('getName', () => {
        it('should return name correctly ', () => {
            
        });
    });

    describe('getRole', () => {
        it('should return employees role correctly', () => {
            
        });
    });

    describe('getEmail', () => {
        it('should return the employees email correctly', () => {
            
        });
    });

    describe('getId', () => {
        it('should return the employees ID correctly', () => {
            
        });
    });
    
});