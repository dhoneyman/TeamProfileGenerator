const Engineer = require("../lib/engineer");

describe('Engineer', () => {

    describe('instantiation', () => {
        it('should pass and instantiate object correctly', () => {
            let testEngineer = new Engineer('dylan', 'dylanhoneyman@gmail.com', 1, 'https://github.com/dhoneyman');
            expect(testEngineer.name).toBe('dylan')
            expect(testEngineer.id).toBe(1)
            expect(testEngineer.email).toBe('dylanhoneyman@gmail.com')
            expect(testEngineer.github).toBe('https://github.com/dhoneyman')
        });
    });

    describe('getName', () => {
        it('should return name correctly ', () => {
            let testEngineer = new Engineer('dylan', 'dylanhoneyman@gmail.com', 1, 'https://github.com/dhoneyman');
            expect(testEngineer.getName()).toBe('dylan');
        });
    });
    
    describe('getRole', () => {
        it('should return employees role correctly', () => {
            let testEngineer = new Engineer('dylan', 'dylanhoneyman@gmail.com', 1, 'https://github.com/dhoneyman');
            expect(testEngineer.getRole()).toBe('Engineer');
            
        });
    });
    
    describe('getEmail', () => {
        it('should return the employees email correctly', () => {
            let testEngineer = new Engineer('dylan', 'dylanhoneyman@gmail.com', 1, 'https://github.com/dhoneyman');
            expect(testEngineer.getEmail()).toBe('dylanhoneyman@gmail.com');
            
        });
    });
    
    describe('getId', () => {
        it('should return the employees ID correctly', () => {
            let testEngineer = new Engineer('dylan', 'dylanhoneyman@gmail.com', 1, 'https://github.com/dhoneyman');
            expect(testEngineer.getId()).toBe(1);
            
        });
    });
    describe('getGithub', () => {
        it('should return the employees GitHub URL correctly', () => {
            let testEngineer = new Engineer('dylan', 'dylanhoneyman@gmail.com', 1, 'https://github.com/dhoneyman');
            expect(testEngineer.getId()).toBe(1);
            
        });
    });
    
});