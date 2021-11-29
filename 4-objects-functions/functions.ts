const add = (a: number, b: number): number => {
   return a + b;
};

// const subtract = (a: number, b: number) => {
//    a - b;
// };

const logger = (message: string): void => {
   console.log(message);
};

console.log(add(4, 2));

const logWeather = ({
   date,
   weather,
}: {
   date: Date;
   weather: string;
}): void => {
   console.log(date);
   console.log(weather);
};
