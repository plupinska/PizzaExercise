const { pizzaDeliveriesAlone, pizzaDeliveriesWithFriend } = require('../src/pizzaProblem');

describe('pizzaDeliveriesAlone', () => {
  it('returns the correct number of unique homes pizza has been delivered to', () => {
    expect(pizzaDeliveriesAlone("")).toBe(1);
    expect(pizzaDeliveriesAlone(">")).toBe(2);
    expect(pizzaDeliveriesAlone("^>v<")).toBe(4);
    expect(pizzaDeliveriesAlone("^v^v^v^v^v")).toBe(2);
  });

  it('throws an error if invalid input is supplied', () => {
    expect(() => { pizzaDeliveriesAlone("??"); }).toThrow("You have entered an incorrect parameter!");
  });
});

describe('pizzaDeliveriesWithFriend', () => {
  it('returns the correct number of unique homes pizza has been delivered to', () => {
    expect(pizzaDeliveriesAlone("")).toBe(1);
    expect(pizzaDeliveriesWithFriend("^v")).toBe(3);
    expect(pizzaDeliveriesWithFriend("^>v<")).toBe(3);
    expect(pizzaDeliveriesWithFriend("^v^v^v^v^v")).toBe(11);
  });

  it('throws an error if invalid input is supplied', () => {
    expect(() => { pizzaDeliveriesWithFriend("??"); }).toThrow("You have entered an incorrect parameter!");
  });
});
