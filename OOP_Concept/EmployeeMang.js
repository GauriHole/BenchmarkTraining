// Employee Management System
class Employee {
  constructor(name, id, salary) {
    this.name = name;
    this.id = id;
    this.salary = salary;
  }

  calculateBonus() {
    return this.salary * 0.05; // Default bonus
  }
}

class Manager extends Employee {
  calculateBonus() {
    return this.salary * 0.1; // 10% bonus for managers
  }
}

class Engineer extends Employee {
  calculateBonus() {
    return this.salary * 0.08; // 8% bonus for engineers
  }
}

class Intern extends Employee {
  calculateBonus() {
    return this.salary * 0.02; // 2% bonus for interns
  }
}
