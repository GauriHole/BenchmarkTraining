// Vehicle Rental System
class Vehicle {
    constructor(brand, model, rentPricePerDay) {
      this.brand = brand;
      this.model = model;
      this.rentPricePerDay = rentPricePerDay;
    }
  
    calculateRentalCost(days) {
      return this.rentPricePerDay * days; // Default calculation
    }
  }
  
  class Car extends Vehicle {
    calculateRentalCost(days) {
      return (this.rentPricePerDay * days) + 50; // Additional fee for cars
    }
  }
  
  class Bike extends Vehicle {
    calculateRentalCost(days) {
      return this.rentPricePerDay * days * 0.9; // 10% discount for bikes
    }
  }
  
  class Truck extends Vehicle {
    calculateRentalCost(days) {
      return (this.rentPricePerDay * days) + 100; // Additional fee for trucks
    }
  }
  
  const car = new Car('Toyota', 'Camry', 40);
  const bike = new Bike('Yamaha', 'MT-07', 20);
  const truck = new Truck('Ford', 'F-150', 70);
  
  console.log(`Car Rental Cost for 3 days: $${car.calculateRentalCost(3)}`);
  console.log(`Bike Rental Cost for 3 days: $${bike.calculateRentalCost(3)}`);
  console.log(`Truck Rental Cost for 3 days: $${truck.calculateRentalCost(3)}`);
  