const Intern = require("../lib/intern");

describe('Intern', () => {

    describe('instantiation', () => {
        it('should pass and instantiate object correctly', () => {
            let testIntern = new Intern('dylan', 'dylanhoneyman@gmail.com', 1, 'utd');
            expect(testIntern.name).toBe('dylan')
            expect(testIntern.id).toBe(1)
            expect(testIntern.email).toBe('dylanhoneyman@gmail.com')
            expect(testIntern.school).toBe('utd')
        });
    });

    describe('getName', () => {
        it('should return name correctly ', () => {
            let testIntern = new Intern('dylan', 'dylanhoneyman@gmail.com', 1, 'utd');
            expect(testIntern.getName()).toBe('dylan');
        });
    });
    
    describe('getRole', () => {
        it('should return intern role correctly', () => {
            let testIntern = new Intern('dylan', 'dylanhoneyman@gmail.com', 1, 'utd');
            expect(testIntern.getRole()).toBe('Intern');
            
        });
    });
    
    describe('getEmail', () => {
        it('should return the intern email correctly', () => {
            let testIntern = new Intern('dylan', 'dylanhoneyman@gmail.com', 1, 'utd');
            expect(testIntern.getEmail()).toBe('dylanhoneyman@gmail.com');
            
        });
    });
    
    describe('getId', () => {
        it('should return the intern ID correctly', () => {
            let testIntern = new Intern('dylan', 'dylanhoneyman@gmail.com', 1, 'utd');
            expect(testIntern.getId()).toBe(1);
            
        });
    });
    describe('getSchool', () => {
        it('should return the intern school correctly', () => {
            let testIntern = new Intern('dylan', 'dylanhoneyman@gmail.com', 1, 'utd');
            expect(testIntern.getSchool()).toBe('utd');
            
        });
    });
    
});