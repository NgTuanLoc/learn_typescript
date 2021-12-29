export class Attributes<T> {
   constructor(private data: T) {}
   get = <K extends keyof T>(key: K): T[K] => {
      return this.data[key];
   };

   set(update: T): void {
      Object.assign(this.data, update);
   }
}

// const attrs = new Attribures<UserProps>({ id: 1, name: 'asd', age: 2 });
// const name = attrs.get('name');
// const age = attrs.get('age');
// const id = attrs.get('id');
