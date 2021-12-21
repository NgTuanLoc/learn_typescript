import { EventHandler } from './EventHandler';
import { Sync } from './Sync';
import { Attributes } from './Attributes';

const serverUrl = 'http://localhost:3000/users';
export interface UserProps {
   id?: number;
   name?: string;
   age?: number;
}

export class User {
   public event = new EventHandler();
   public sync: Sync<UserProps> = new Sync<UserProps>(serverUrl);
   public attributes: Attributes<UserProps>;

   constructor(attrs: UserProps) {
      this.attributes = new Attributes<UserProps>(attrs);
   }
}
