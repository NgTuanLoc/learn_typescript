import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numberArray = new NumbersCollection([12, -2, 3, -12, 34, 234, -2]);
numberArray.sort();

console.log(numberArray.data);

// const sort = new Sorter([12, -2, 3, -12, 34, 234]);
// sort.sort();
// console.log(sort.collection);

const characterArray = new CharactersCollection('asdmnfbbAzh');

characterArray.sort();
console.log(characterArray.data);

const linkedList = new LinkedList();
linkedList.add(234);
linkedList.add(-23);
linkedList.add(3);
linkedList.add(-1);
linkedList.add(5);

linkedList.sort()
linkedList.print()
