$(document).ready(function () {
    $('#submitButton').click(function () {
        var selectedOption = $('#countrySelect').val();
        if (selectedOption === 'Amsterdam') {
            window.location.href = 'amsterdam.html';
        } else if (selectedOption === 'Paris') {
            window.location.href = 'paris.html';
        } else if (selectedOption === 'London') {
            window.location.href = 'london.html';
        }
        // Add more conditions for other options if needed
    });
});
