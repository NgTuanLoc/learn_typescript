// import { User } from './User';
// import { Company } from './Company';

// const user = new User();
// const company = new Company();
// console.log(user);
// console.log(company);

// new google.maps.Map(document.getElementById('map'), {
//    zoom: 4,
//    center: {
//       lat: 0,
//       lng: 0,
//    },
// });

import { Company } from './Company';
import { CustomMap } from './CustomMap';
import { User } from './User';

const company = new Company();
const user = new User();
const map = new CustomMap('map');
map.addMarker(user);
map.addMarker(company);
