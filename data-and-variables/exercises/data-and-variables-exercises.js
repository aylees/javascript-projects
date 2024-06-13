let shuttle_name = "Determination";
let shuttle_speed_mph = 17500;
let distance_to_mars_km = 225000000;
let distance_to_the_moon_km = 384400;
const miles_per_kilometer = 0.621;
// Dclare and assign the variables below

console.log (typeof shuttle_name)
console.log (typeof shuttle_speed_mph)
console.log (typeof distance_to_mars_km)
console.log (typeof distance_to_the_moon_km)
console.log (typeof miles_per_kilometer)
// Use console.log to print the 'typeof' each variable. Print one item per line.

let miles_to_mars = distance_to_mars_km * miles_per_kilometer;
let hours_to_mars = miles_to_mars / shuttle_speed_mph;
let days_to_mars = hours_to_mars /24;
// Calculate a space mission below

console.log (miles_to_mars)
console.log (hours_to_mars)
console.log (days_to_mars)
console.log (shuttle_name + " will take " + days_to_mars + " days to reach Mars.");
// Print the results of the space mission calculations below

let miles_to_moon = distance_to_the_moon_km * miles_per_kilometer;
let hours_to_moon = miles_to_moon / shuttle_speed_mph;
let days_to_moon = hours_to_moon / 24;
console.log (miles_to_moon)
console.log (hours_to_moon)
console.log (days_to_moon)
// Calculate a trip to the moon below


console.log (shuttle_name + " will take " + days_to_moon + " days to reach the Moon.");
// Print the results of the trip to the moon below
