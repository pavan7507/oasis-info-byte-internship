function convertTemperature() {
    const inputTemp = document.getElementById('input-temp').value;
    const inputUnit = document.getElementById('input-unit').value;
    let outputTemp = '';
    
    if (inputTemp === '' || isNaN(inputTemp)) {
        alert('Please enter a valid number for temperature');
        return;
    }
    
    if (inputUnit === 'Celsius') {
        outputTemp = convertFromCelsius(inputTemp);
    } else if (inputUnit === 'Fahrenheit') {
        outputTemp = convertFromFahrenheit(inputTemp);
    } else if (inputUnit === 'Kelvin') {
        outputTemp = convertFromKelvin(inputTemp);
    }

    document.getElementById('output-temp').innerHTML = outputTemp;
}

function convertFromCelsius(celsius) {
    const fahrenheit = (celsius * 9/5) + 32;
    const kelvin = parseFloat(celsius) + 273.15;
    return `${celsius}°C = ${fahrenheit.toFixed(2)}°F = ${kelvin.toFixed(2)} K`;
}

function convertFromFahrenheit(fahrenheit) {
    const celsius = (fahrenheit - 32) * 5/9;
    const kelvin = (fahrenheit - 32) * 5/9 + 273.15;
    return `${fahrenheit}°F = ${celsius.toFixed(2)}°C = ${kelvin.toFixed(2)} K`;
}

function convertFromKelvin(kelvin) {
    const celsius = kelvin - 273.15;
    const fahrenheit = (kelvin - 273.15) * 9/5 + 32;
    return `${kelvin} K = ${celsius.toFixed(2)}°C = ${fahrenheit.toFixed(2)}°F`;
}
