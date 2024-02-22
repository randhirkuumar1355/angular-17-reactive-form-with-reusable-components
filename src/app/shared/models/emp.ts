export class Emp {
    public id: number;
    public firstName: string;
    public lastName: string;
    public gender: string;
    public doj: Date;
    public email: string;
    public mobile: number;
    public salary: number
    constructor() {
        this.id = 0;
        this.firstName = '';
        this.lastName = '';
        this.gender = '';
        this.doj = new Date();
        this.email = '';
        this.mobile = 0;
        this.salary = 0;
    }
  }