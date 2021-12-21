import { User } from './models/User';

const user = new User({ id: 1 });

user.set({ name: 'Cute SuSu', age: 100 });

user.save();

const newUser = new User({ name: 'Super pup', age: 12 });
newUser.save();
