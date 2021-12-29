import { EventHandler } from './EventHandler';
import { Sync } from './Sync';
import { Attributes } from './Attributes';
import { AxiosResponse } from 'axios';

const serverUrl = 'http://localhost:3000/users';
export interface UserProps {
   id?: number;
   name?: string;
   age?: number;
}

export class User {
   public events = new EventHandler();
   public sync: Sync<UserProps> = new Sync<UserProps>(serverUrl);
   public attributes: Attributes<UserProps>;

   constructor(attrs: UserProps) {
      this.attributes = new Attributes<UserProps>(attrs);
   }

   get on() {
      return this.events.on;
   }

   get trigger() {
      return this.events.trigger;
   }

   get get() {
      return this.attributes.get;
   }

   set(update: UserProps): void {
      this.attributes.set(update);
      this.events.trigger('change');
   }

   fetch(): void {
      const id = this.attributes.get('id');
      if (typeof id !== 'number') {
         throw new Error('Can not fetch without an id');
      }
      this.sync.fetch(id).then((response: AxiosResponse): void => {
         this.set(response.data);
      });
   }
}
