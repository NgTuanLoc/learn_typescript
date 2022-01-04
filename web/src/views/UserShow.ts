import { View } from './View';
import { User, UserProps } from '../models/User';

export class UserShow extends View<User, UserProps> {
   template(): string {
      return `
            <div>
                <h1>User Detail</h1>
                <div>User's name: ${this.model.get('name')}</div>
                <div>User's age: ${this.model.get('age')}</div> 
            </div>
        `;
   }
}
