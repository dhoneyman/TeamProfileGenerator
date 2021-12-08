const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, role, email, id, officeNumber) {
        super(name, email, id)
            this.officeNumber = officeNumber;
        
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
        return 'Manager';
    }
}

module.exports = Manager;