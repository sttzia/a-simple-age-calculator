var showYears = document.getElementById('showYears');
var showMonths = document.getElementById('showMonths');
var showDays = document.getElementById('showDays');
var button = document.getElementById('btn');

btn.onclick = function () {
        var dateStart = document.getElementById('dateStart').value;
        var dateEnd = document.getElementById('dateEnd').value;
        var dateStarting = new Date(dateStart);
        var dateEnding = new Date(dateEnd);
        var diff = dateEnding - dateStarting;
        var years = Math.floor(diff / (365.25 * 24 * 60 * 60 * 1000));
        var remaining = Math.floor(diff % (365.25 * 24 * 60 * 60 * 1000));
        var months = Math.floor(remaining / ((365.25 / 12) * 24 * 60 * 60 * 1000));
        var remaining = Math.floor(remaining % ((365.25 / 12) * 24 * 60 * 60 * 1000));
        var days = Math.floor(remaining / (24 * 60 * 60 * 1000));
        showYears.innerHTML = years;
        showMonths.innerHTML = months;
        showDays.innerHTML = days;
}
