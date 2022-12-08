export default class Contac {
    constructor(name, lastname, email, status) {
        this.id = Date.now();
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.status = status;
    }
}