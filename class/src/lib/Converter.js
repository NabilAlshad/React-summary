export function toCelsius(fahrenheit) {
  return ((fahrenheit - 32.0) * 5.0) / 9.0;
}
export function toFahrenheit(celsius) {
  return (celsius * 9.0) / 5.0 + 32.0;
}
export function converter(temperature, convertTo) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = convertTo(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}
