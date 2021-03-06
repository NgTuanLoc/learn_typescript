type Callback = () => void;

export class EventHandler {
   events: { [key: string]: Callback[] } = {};

   on = (eventName: string, callback: Callback) => {
      const handlers = this.events[eventName] || [];
      handlers.push(callback);
      this.events[eventName] = handlers;
   };

   trigger = (eventName: string): void => {
      const handlers = this.events[eventName];

      if (!handlers || handlers.length === 0) {
         return;
      }

      handlers.forEach((callback) => {
         callback();
      });
   };
}
