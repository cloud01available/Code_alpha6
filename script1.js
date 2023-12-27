// Simulated smart home device states
let deviceStates = {
    light: false,
    thermostat: 20,
    camera: false,
    security: false
};

function toggleDevice(device) {
    deviceStates[device] = !deviceStates[device];
    updateDeviceState(device);
}

function setTemperature() {
    const temperatureSlider = document.getElementById('temperatureSlider');
    deviceStates.thermostat = temperatureSlider.value;
    updateDeviceState('thermostat');
}

function updateDeviceState(device) {
    const deviceElement = document.getElementById(device);
    if (device === 'thermostat') {
        const temperatureLabel = document.getElementById('temperatureLabel');
        temperatureLabel.innerText = deviceStates[device] + '°C';
    }
    // Here you would typically send a request to your backend to update the actual device state
    console.log(`${device} is now ${deviceStates[device] ? 'on' : 'off'}`);
}
