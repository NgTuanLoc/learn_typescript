class ArrayOfNumbers {
   constructor(public collection: number[]) {}
   get(index: number): number {
      return this.collection[index];
   }
}

class ArrayOfStrings {
   constructor(public collection: string[]) {}
   get(index: number): string {
      return this.collection[index];
   }
}

class ArrayOfAnything<T> {
   constructor(public collection: T[]) {}
   get(index: number): T {
      return this.collection[index];
   }
}

// TEST
const test = new ArrayOfAnything<number>([1, 2]);
console.log(test.get(1));

// Generics with functions
function printStrings(arr: string[]): void {
   for (let index = 0; index < arr.length; index++) {
      console.log(arr[index]);
   }
}

function printNumbers(arr: number[]): void {
   for (let index = 0; index < arr.length; index++) {
      console.log(arr[index]);
   }
}

function printAnything<T>(arr: T[]) {
   for (let index = 0; index < arr.length; index++) {
      console.log(arr[index]);
   }
}

printAnything<string>(['a', 'b', 'c']);
