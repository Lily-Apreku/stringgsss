let country = "Guinea Bissau";
country = country.replace(/ /g, "-");
console.log(country);

let city = " Sydney ";
city = city.trim(); // Removes extra spaces
console.log(city);

let attraction = "Opera House";
attraction = attraction.toLowerCase();
console.log(attraction);

let place = "school";
place = place.toUpperCase();
console.log(place);

console.log(
  `I went to visit the ${attraction} in ${city}, right next to my ${place}. Now, I'm getting ready for my trip to ${country}!`
);
