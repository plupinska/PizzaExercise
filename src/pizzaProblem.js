// add path to employee
// factor out summarization

class Employee {
  constructor(name) {
    this.name = name;
    this.path = "";
  }

  addToPath(direction) {
    this.path += direction;
  }
}

class DeliveryDelegator {
  constructor(directions, employees) {
    this.directions = directions;
    this.employees = employees;
  }

  delegate() {
    for (let i  = 0; i < this.employees.length; i++) {
      let j = i;
      const currentEmployee = this.employees[i];
      while (j < this.directions.length) {
        currentEmployee.addToPath(this.directions[j]);
        j += this.employees.length;
      }
    }
  }
}

class Summarizer {
  constructor(employees) {
    this.employees = employees;
  }

  uniqDeliveries() {
    const homes = new Set();
    let currentLocation = [0,0];
    homes.add(JSON.stringify(currentLocation));

    this.employees.forEach(employee => {
      let deliveryPath = employee.path;
      for (let i = 0; i < deliveryPath.length; i++) {
        const direction = deliveryPath[i];
        currentLocation = this.calculateLocation(direction, currentLocation);
        homes.add(JSON.stringify(currentLocation));
      }

      currentLocation = [0,0];
    });

    return homes.size;
  }

  calculateLocation(direction, location) {
    switch (direction) {
      case "^":
        location[1] += 1;
        return location;
      case "v":
        location[1] -= 1;
        return location;
      case "<":
        location[0] -= 1;
        return location;
      case ">":
        location[0] += 1;
        return location;
      default:
        throw "You have entered an incorrect parameter!";
    }
  }
}

const employeeDeliverySummary = (directions, employees) => {
  const deliveries = new DeliveryDelegator(directions, employees);
  deliveries.delegate();
  const summarizer = new Summarizer(employees);
  return summarizer.uniqDeliveries();
};

const pizzaDeliveriesAlone = directions => {
  const maria = new Employee('Maria');
  const employees = [maria];
  return employeeDeliverySummary(directions, employees);
};

const pizzaDeliveriesWithFriend = directions => {
  const maria = new Employee('Maria');
  const clovis = new Employee('Clovis');
  const employees = [maria, clovis];
  return employeeDeliverySummary(directions, employees);
};

module.exports = {
  pizzaDeliveriesAlone,
  pizzaDeliveriesWithFriend,
};
