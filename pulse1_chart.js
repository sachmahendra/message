document.addEventListener("DOMContentLoaded", function() {
    // Create an array to store pulse rate data
    var pulseData = [];

    // Function to simulate receiving data from the pulse sensor
    function receivePulseData() {
        // Generate a random pulse rate between 60 and 100 BPM
        var pulseRate = Math.floor(Math.random() * (100 - 60 + 1) + 60);

        // Add the pulse rate to the data array
        pulseData.push(pulseRate);

        // Limit the data array to show only the last 10 values
        if (pulseData.length > 10) {
            pulseData.shift();
        }

        // Update the chart with the new data
        updateChart();
    }

    // Function to update the chart with the pulse rate data
    function updateChart() {
        var ctx = document.getElementById("pulse-chart").getContext("2d");

        // Create the chart using Chart.js
        var chart = new Chart(ctx, {
            type: "bar",
            data: {
                labels: pulseData.map(function(_, index) {
                    return "Sample " + (index + 1);
                }),
                datasets: [{
                    label: "Pulse Rate (BPM)",
                    data: pulseData,
                    backgroundColor: "rgba(75, 192, 192, 0.5)",
                    borderColor: "rgba(75, 192, 192, 1)",
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        suggestedMax: 120
                    }
                }
            }
        });
    }

    // Update the chart initially
    updateChart();

    // Simulate receiving pulse data every 2 seconds
    setInterval(receivePulseData, 2000);
});