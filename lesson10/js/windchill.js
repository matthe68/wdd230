var temp = document.querySelector("#current-temp").innerHTML;
var windSpeed = document.querySelector("#current-wind-speed").innerHTML;
console.log("temp: ", temp, "windSpeed: ", windSpeed);
var windChill = "N/A";
if (temp <= 50 && windSpeed > 3) {
  windChill = 35.74 + .6215 * temp - 35.75 * Math.pow(windSpeed, .16) + .4275 * temp * Math.pow(windSpeed, .16);
}
var windChillElement = document.querySelector('#wind-chill');
if(windChill == "N/A") {
  windChillElement.innerHTML = windChill;
} else {
  windChillElement.innerHTML = String(Math.round(windChill)) + "&#176;F";
}
console.log("windChillFactor: ", windChill); 