import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

const numberArray = new NumbersCollection([12, -2, 3, -12, 34, 234, -2]);
const sort = new Sorter(numberArray);
sort.sort();
console.log(sort.collection);

// const sort = new Sorter([12, -2, 3, -12, 34, 234]);
// sort.sort();
// console.log(sort.collection);

const characterArray = new CharactersCollection('asdmnfbbAzh');
const newSort = new Sorter(characterArray);
newSort.sort()
console.log(newSort.collection);
