function convertTemperature() {
    var temperature = parseFloat(document.getElementById("temperatura").value);
    var scale = document.getElementById("scale").value;
    var celsius, fahrenheit, kelvin;
    var resultText = "";

    if (scale === "celsius") {
        celsius = temperature;
        fahrenheit = (celsius * 9 / 5) + 32;
        kelvin = celsius + 273.15;
        resultText += "Resultado:\n";
        resultText += "Celsius: " + celsius.toFixed(2) + " °C\n";
        resultText += "Fahrenheit: " + fahrenheit.toFixed(2) + " °F\n";
        resultText += "Kelvin: " + kelvin.toFixed(2) + " K";
    } else if (scale === "fahrenheit") {
        fahrenheit = temperature;
        celsius = (fahrenheit - 32) * 5 / 9;
        kelvin = celsius + 273.15;
        resultText += "Resultado:\n";
        resultText += "Fahrenheit: " + fahrenheit.toFixed(2) + " °F\n";
        resultText += "Celsius: " + celsius.toFixed(2) + " °C\n";
        resultText += "Kelvin: " + kelvin.toFixed(2) + " K";
    } else if (scale === "kelvin") {
        kelvin = temperature;
        celsius = kelvin - 273.15;
        fahrenheit = (celsius * 9 / 5) + 32;
        resultText += "Resultado:\n";
        resultText += "Kelvin: " + kelvin.toFixed(2) + " K\n";
        resultText += "Celsius: " + celsius.toFixed(2) + " °C\n";
        resultText += "Fahrenheit: " + fahrenheit.toFixed(2) + " °F";
    }

    document.getElementById("result").innerText = resultText;
}
