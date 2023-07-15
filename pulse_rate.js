document.addEventListener("DOMContentLoaded", function() {
    // Function to simulate pulse rate measurement
    function measurePulseRate() {
        // Generate a random pulse rate between 60 and 100 BPM
        var pulseRate = Math.floor(Math.random() * (100 - 60 + 1) + 60);
        return pulseRate;
    }

    // Function to update the pulse rate value on the webpage
    function updatePulseRate() {
        var pulseRateElement = document.getElementById("pulse-rate-value");
        var pulseRate = measurePulseRate();
        pulseRateElement.textContent = pulseRate;
    }

    // Update the pulse rate initially
    updatePulseRate();

    // Update the pulse rate every 5 seconds
    setInterval(updatePulseRate, 5000);
});