
const pizzaDeliveriesAlone = directions => {
  const uniqPizzaHouses = new Set();
  let mariasLocation = [0,0];
  const addToSet = addCoordinatesToSet(uniqPizzaHouses);
  addToSet(mariasLocation);
  let i = 0;

  while (i < directions.length) {
    let direction = directions[i];
    let mariasNextLocation = calcCoordinates(mariasLocation, direction);
    addToSet(mariasNextLocation);
    i++;
  }

  return uniqPizzaHouses.size;
};

const pizzaDeliveriesWithFriend = directions => {
  const uniqPizzaHouses = new Set();
  let mariasLocation = [0,0];
  let clovisLocation = [0,0];
  const addToSet = addCoordinatesToSet(uniqPizzaHouses);
  addToSet(mariasLocation);
  let i = 0;
  let j = 1;


  while (i < directions.length && j < directions.length) {
    mariasLocation = calcCoordinates(mariasLocation, directions[i]);
    clovisLocation = calcCoordinates(clovisLocation, directions[j]);
    addToSet(mariasLocation);
    addToSet(clovisLocation);
    i = j + 1;
    j += 2;
  }

  return uniqPizzaHouses.size;
};

const addCoordinatesToSet = set => coordinates => set.add(JSON.stringify(coordinates));

const calcCoordinates = (location, nextStep) => {
  switch (nextStep) {
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
};

module.exports = {
  pizzaDeliveriesAlone,
  pizzaDeliveriesWithFriend,
};