function celiusToFahrenheit(celsius){
    var fahrenheit = (celsius * 9)/5 + 32;
    return(celsius + '°C is ' + fahrenheit + '°F')
}
console.log(celiusToFahrenheit(2));

  function fahrenheitToCelsius(fahrenheit){
    var celsius = ((fahrenheit - 32)*5)/9;
    return(fahrenheit + "°F is " + celsius + "°C ");
  }
  console.log(fahrenheitToCelsius(2));