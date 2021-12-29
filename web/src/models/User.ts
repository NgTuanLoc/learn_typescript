import { Model } from './Model';
import { Sync } from './Sync';
import { EventHandler } from './EventHandler';
import { Attributes } from './Attributes';
import { Collection } from './Collection';

const serverUrl = 'http://localhost:3000/users';
export interface UserProps {
   id?: number;
   name?: string;
   age?: number;
}

export class User extends Model<UserProps> {
   static buildUser(attr: UserProps): User {
      return new User(
         new Attributes<UserProps>(attr),
         new EventHandler(),
         new Sync<UserProps>(serverUrl)
      );
   }

   static buildCollection(): Collection<User, UserProps> {
      return new Collection<User, UserProps>(serverUrl, (json: UserProps) =>
         User.buildUser(json)
       );
   }
}
