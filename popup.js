document.addEventListener('DOMContentLoaded', function () {
    const resultDiv = document.getElementById('result');
    function fetchAndConvertToUTC() {
        fetch('http://worldtimeapi.org/api/timezone/Asia/Kolkata')
            .then(response => response.json())
            .then(data => {
                const indianDateTime = new Date(data.datetime);
                const utcDateTime = indianDateTime.toUTCString();
                resultDiv.textContent = `${utcDateTime}`;
            })
            .catch(error => {
                console.error('Error fetching Indian time:', error);
                resultDiv.textContent = 'Error fetching Indian time. Please try again later.';
            });
    }
    fetchAndConvertToUTC();
});
