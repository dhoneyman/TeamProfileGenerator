class Employee {
    constructor(name, email, id) {
        this.name = name;
        this.email = email;
        this.id = id;
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
        return 'Employee';
    }
}

module.exports = Employee;