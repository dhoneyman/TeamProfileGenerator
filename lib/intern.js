const Employee = require('./employee');

class Intern {
    constructor(name, role, email, id, school){
        super(name, email, id)
            this.school = school;
        
    }
}

module.exports = Intern;