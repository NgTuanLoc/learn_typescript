export class CustomMap {
   private googleMap: google.maps.Map;
   constructor(divId: string) {
      this.googleMap = new google.maps.Map(document.getElementById(divId), {
         zoom: 1,
         center: {
            lat: 2,
            lng: 5,
         },
      });
   }
}
