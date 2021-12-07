const Employee = require('./employee');

class Intern {
    constructor(name, role, email, id, school){
        super(name, role, email, id)
            this.school = school;
        
    }
}