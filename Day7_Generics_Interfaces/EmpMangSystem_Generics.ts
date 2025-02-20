// Step 1
interface Employee {
    id: number;
    name: string;
    position: string;
    salary: number;
}
//Step 2
interface Manager extends Employee {
    teamsize: number;
}
//Step 3
class Department {
    private employees: Employee[] = [];

    addEmployee(employee: Employee): void {
        this.employees.push(employee);
    }

    removeEmployee(id1: number): void {
        this.employees = this.employees.filter(emp => emp.id !== id1);
    }

    getTotalSalary(): number {
        return this.employees.reduce((total, emp) => total + emp.salary, 0);
    }

    listEmployee(): void {
        this.employees.forEach(emp => {
            console.log(`Employee ID: ${emp.id}, Name: ${emp.name}, Position: ${emp.position}, Salary: ${emp.salary}`);
        });
    }
}

//Step 4
class GenericStorage<T>{
  items:T[]=[];
  push(item:T):void{
    this.items.push(item);
  }
}

//Step 5
function updateSalary<T extends Employee>(employee:T,newSalary:number):T{
    employee.salary = newSalary;
    return employee;
}
const dept = new Department();

dept.addEmployee({ name: "Sai", id: 1, position: "Developer", salary: 50000 });
dept.addEmployee({ name: "Ram", id: 2, position: "Manager", salary: 60000 });
console.log("----------------------- List of Employees --------------------")
dept.listEmployee();
console.log("----------------------- Salary of All Employees --------------------")
console.log(dept.getTotalSalary());
dept.removeEmployee(1);
console.log("----------------------- Removed Employee Id: 1  --------------------")
dept.listEmployee();

const genStore = new GenericStorage();
genStore.push(1);
genStore.push(["Gauri","Nikita","Aditi","Ishwari"]);
console.log("Generic Function Name List: ",genStore);

const emp : Employee ={id:1,name:"Gauri",position: "Developer", salary: 50000 }
console.log(`Employee ID: ${emp.id}, Name: ${emp.name}, Position: ${emp.position}, Salary: ${emp.salary}`);
console.log("----------------------  Employee Added Successfully   ------------------");
const updSal = updateSalary(emp,65000);
console.log("----------------------  Salary Updated Successfully   ------------------",updSal);
