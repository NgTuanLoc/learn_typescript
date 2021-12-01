const drink = {
   color: 'brown',
   carbonated: true,
   sugar: 40,
};

type Drink = [string, boolean, number];

const pepsi: [string, boolean, number] = ['brown', true, 40];
const sprite: Drink = ['clear', true, 0];
const tea: Drink = ['yellow', false, 3];
