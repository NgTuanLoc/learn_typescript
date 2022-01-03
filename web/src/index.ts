import { UserForm } from './views/UserForm';
import { User } from './models/User';

const testUser = User.buildUser({ name: 'TuanLoc', age: 20 });
const root = document.getElementById('root');
if (root) {
   const userForm = new UserForm(root, testUser);
   userForm.render();
} else {
   throw new Error('Root element not found ');
}
