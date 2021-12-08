const Employee = require('./employee');

class Manager {
    constructor(name, role, email, id, officeNumber) {
        super(name, email, id)
            this.officeNumber = officeNumber;
        
    }
}

module.exports = Manager;