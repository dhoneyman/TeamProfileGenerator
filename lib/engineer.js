const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, role, email, id, github){
        super(name, role, email, id);
        this.github = github;
    }
}