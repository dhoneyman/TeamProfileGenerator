const Manager = require("../lib/manager");

describe('Manager', () => {

    describe('instantiation', () => {
        it('should pass and instantiate object correctly', () => {
            let testManager = new Manager('dylan', 'dylanhoneyman@gmail.com', 1, 2);
            expect(testManager.name).toBe('dylan')
            expect(testManager.id).toBe(1)
            expect(testManager.email).toBe('dylanhoneyman@gmail.com')
            expect(testManager.officeNumber).toBe(2)
        });
    });

    describe('getName', () => {
        it('should return name correctly ', () => {
            let testManager = new Manager('dylan', 'dylanhoneyman@gmail.com', 1, 2);
            expect(testManager.getName()).toBe('dylan');
        });
    });
    
    describe('getRole', () => {
        it('should return employees role correctly', () => {
            let testManager = new Manager('dylan', 'dylanhoneyman@gmail.com', 1, 2);
            expect(testManager.getRole()).toBe('Manager');
            
        });
    });
    
    describe('getEmail', () => {
        it('should return the employees email correctly', () => {
            let testManager = new Manager('dylan', 'dylanhoneyman@gmail.com', 1, 2);
            expect(testManager.getEmail()).toBe('dylanhoneyman@gmail.com');
            
        });
    });
    describe('getId', () => {
        it('should return the employees ID correctly', () => {
            let testManager = new Manager('dylan', 'dylanhoneyman@gmail.com', 1, 2);
            expect(testManager.getId()).toBe(1);
            
        });
    });
    
    describe('getOfficeNumber', () => {
        it('should return the employees office number correctly', () => {
            let testManager = new Manager('dylan', 'dylanhoneyman@gmail.com', 1, 2);
            expect(testManager.getOffice()).toBe(2);
            
        });
    });
    
});