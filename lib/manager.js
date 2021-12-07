const Employee = require('./employee');

class Manager {
    constructor(name, role, email, id, officeNumber) {
        super(name, role, email, id)
            this.officeNumber = officeNumber;
        
    }
}