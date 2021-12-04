import { Sorter } from './Sorter';

export class NumbersCollection extends Sorter {
   constructor(public data: number[]) {
       super();
   }

   get length(): number {
      return this.data.length;
   }

   compare(leftIndex: number, rightIndex: number): boolean {
      return this.data[leftIndex] > this.data[rightIndex];
   }

   swap(leftIndex: number, rightNumber: number): void {
      let temp = this.data[leftIndex];
      this.data[leftIndex] = this.data[rightNumber];
      this.data[rightNumber] = temp;
   }
}
