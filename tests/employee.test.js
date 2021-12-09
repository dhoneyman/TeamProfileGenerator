const Employee = require("../lib/employee");

describe('Employee', () => {

    describe('instantiation', () => {
        it('should pass and instantiate object correctly', () => {
            let testEmployee = new Employee('dylan', 'dylanhoneyman@gmail.com', 1);
            expect(testEmployee.name).toBe('dylan')
            expect(testEmployee.id).toBe(1)
            expect(testEmployee.email).toBe('dylanhoneyman@gmail.com')
        });
    });

    describe('getName', () => {
        it('should return name correctly ', () => {
            let testEmployee = new Employee('dylan', 'dylanhoneyman@gmail.com', 1);
            expect(testEmployee.getName()).toBe('dylan');
        });
    });
    
    describe('getRole', () => {
        it('should return employees role correctly', () => {
            let testEmployee = new Employee('dylan', 'dylanhoneyman@gmail.com', 1);
            expect(testEmployee.getRole()).toBe('Employee');
            
        });
    });
    
    describe('getEmail', () => {
        it('should return the employees email correctly', () => {
            let testEmployee = new Employee('dylan', 'dylanhoneyman@gmail.com', 1);
            expect(testEmployee.getEmail()).toBe('dylanhoneyman@gmail.com');
            
        });
    });
    
    describe('getId', () => {
        it('should return the employees ID correctly', () => {
            let testEmployee = new Employee('dylan', 'dylanhoneyman@gmail.com', 1);
            expect(testEmployee.getId()).toBe(1);
            
        });
    });
    
});