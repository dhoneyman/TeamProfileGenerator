const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, role, email, id, school){
        super(name, email, id);
        this.school = school;
        
    }
    getEmail(){
        return this.email
    }
    getId(){
        return this.id
    }
    getName(){
        return this.name
    }
    getRole(){
        return 'Intern';
    }
}

module.exports = Intern;