import { User } from './models/User';

const user = new User({ name: 'NgTuanLoc', age: 21, id: 1 });

user.on('save', () => {
   console.log('Save event');
   console.log(user);
});

user.save();
