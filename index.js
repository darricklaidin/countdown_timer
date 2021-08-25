function countdown() {
    const endDateString = document.getElementById("date_input").value;
    const endDate = new Date(endDateString);
    if (endDateString.length != 0 && endDate != "Invalid Date") {
        const currentDate = new Date();
        const totalSeconds = (endDate - currentDate) / 1000;
        // Converts total milliseconds to seconds

        const daysLeft = Math.floor(totalSeconds / 3600 / 24);
        const hoursLeft = Math.floor(totalSeconds / 3600) % 24;
        const minutesLeft = Math.floor(totalSeconds / 60) % 60;
        const secondsLeft = Math.floor(totalSeconds) % 60;

        if (daysLeft < 0) {
            document.getElementById("days").innerHTML = "00";
        }
        else if (daysLeft < 10) {
            document.getElementById("days").innerHTML = "0" + daysLeft;
        } 
        else {
            document.getElementById("days").innerHTML = daysLeft;
        }
        
        if (hoursLeft < 0) {
            document.getElementById("hours").innerHTML = "00";
        }
        else if (hoursLeft < 10) {
            document.getElementById("hours").innerHTML = "0" + hoursLeft;
        } 
        else {
            document.getElementById("hours").innerHTML = hoursLeft;
        }
        
        if (minutesLeft < 0) {
            document.getElementById("minutes").innerHTML = "00";
        } 
        else if (minutesLeft < 10) {
            document.getElementById("minutes").innerHTML = "0" + minutesLeft;
        } 
        else {
            document.getElementById("minutes").innerHTML = minutesLeft;
        }

        if (secondsLeft < 0) {
            document.getElementById("seconds").innerHTML = "00";
        }
        else if (secondsLeft < 10) {
            document.getElementById("seconds").innerHTML = "0" + secondsLeft;
        } 
        else {
            document.getElementById("seconds").innerHTML = secondsLeft;
        }

    }
    else {
        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";
    }
}

setInterval(countdown, 1000);