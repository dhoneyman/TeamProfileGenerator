const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, role, email, id, officeNumber) {
        super(name, email, id)
            this.officeNumber = officeNumber;
        
    }
    getOffice(){
        return this.officeNumber
    }
    getRole(){
        return 'Manager';
    }
}

module.exports = Manager;