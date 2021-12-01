const carMakers: string[] = ['ford', 'vin-fast', 'toyota'];
const dates = [new Date(), new Date()];

// string [][] => string[] <- []
const carsByMake = [['f150'], ['corolla'], ['camaro']];

// 1/ Help with inference when extracting values
const car = carMakers[0];

// 2/ Prevent incompatible values
// carMakers.push(100);

// 3/ Help with built-in method => auto complete
carMakers.map((car: string): string => {
   return car;
});

// 4/ Flexible type
// const importantDates = [new Date(), '05-23-2000'];
const importantDates: (Date | string)[] = [];

