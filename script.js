// Function to fetch the device response
async function fetchDeviceResponse() {
    try {
        const response = await fetch('YOUR_API_ENDPOINT');
        const data = await response.json();

        // Update the device status
        const statusValueElement = document.getElementById('statusValue');
        statusValueElement.textContent = data.status;

        // Update the sensor data
        const sensorDataListElement = document.getElementById('sensorDataList');
        sensorDataListElement.innerHTML = '';

        data.sensorData.forEach(sensor => {
            const listItem = document.createElement('li');
            listItem.textContent = `${sensor.name}: ${sensor.value}`;
            sensorDataListElement.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error fetching device response:', error);
    }
}

// Fetch the device response initially
fetchDeviceResponse();

// Fetch the device response every 5 seconds
setInterval(fetchDeviceResponse, 5000);