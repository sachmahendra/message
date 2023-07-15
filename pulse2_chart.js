document.addEventListener("DOMContentLoaded", function() {
    // Create an array to store pulse rate data
    var pulseData = [];

    // Function to retrieve pulse rate data from the sensor
    function getPulseRateDataFromSensor() {
        // Placeholder for retrieving pulse rate data from the sensor
        // Replace this with the actual code to read/poll the sensor and obtain the pulse rate data
        var rawPulseData = ...; // Retrieve raw pulse rate data from the sensor

        // Process the raw pulse data to obtain the pulse rate value
        var pulseRate = ...; // Process the raw data to extract the pulse rate value

        return pulseRate;
    }

    // Function to update the chart with the pulse rate data
    function updateChart() {
        var ctx = document.getElementById("pulse-chart").getContext("2d");

        // Create the chart using Chart.js
        var chart = new Chart(ctx, {
            // Chart configuration...
        });
    }

    // Function to receive pulse rate data from the sensor
    function receivePulseData() {
        var pulseRate = getPulseRateDataFromSensor();

        // Add the pulse rate to the data array
        pulseData.push(pulseRate);

        // Limit the data array to show only the last 10 values
        if (pulseData.length > 10) {
            pulseData.shift();
        }

        // Update the chart with the new data
        updateChart();
    }

    // Update the chart initially
    updateChart();

    // Simulate receiving pulse data at a regular interval
    setInterval(receivePulseData, 2000);
});