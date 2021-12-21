import { User } from './models/User';

const user = new User({ name: 'NgTuanLoc', age: 21 });
console.log(user.get('name'));
console.log(user.get('age'));

user.set({ name: 'susu', age: 6 });
console.log(user.get('name'));
console.log(user.get('age'));