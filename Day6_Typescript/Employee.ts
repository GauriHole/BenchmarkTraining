// Employee Management System
class Employee{
    id:number;
    name:string;
    sal:number;
    
      constructor(id:number,name:string,sal:number){
          this.id = id ;
          this.name = name;
          this.sal = sal;
      }
       disp():void{
        console.log(this.id,this.name,this.sal);
      }
      calculateBonus(): number {
        return this.sal * 0.05; 
      }
}
class Manager extends Employee {
    calculateBonus(): number {
      return this.sal * 0.1; 
    }
  }
  
  class Engineer extends Employee {
    calculateBonus(): number {
      return this.sal * 0.08; 
    }
  }
  
  class Intern extends Employee {
    calculateBonus(): number {
      return this.sal * 0.02; // 2% bonus for interns
    }
  }
  
  const s1 = new Employee(1,"Gauri",4000);
  
  const manager = new Manager( 1,'Alice', 90000);
  manager.disp();
  console.log(`Manager Bonus: $${manager.calculateBonus()}`);

  const engineer = new Engineer( 2,'Bob', 80000);
  engineer.disp();
  console.log(`Engineer Bonus: $${engineer.calculateBonus()}`);

  const intern = new Intern(3,'Charlie', 30000);
  intern.disp();
  console.log(`Intern Bonus: $${intern.calculateBonus()}`);
  
  
