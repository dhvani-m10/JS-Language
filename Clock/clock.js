setInterval(() => {
    const date = new Date();

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let ampm;

    if (minute < 10) {
        minute = '0' + minute;
    }

    if (second < 10) {
        second = '0' + second;
    }

    if (hour <= 12) {
        ampm = "AM";
    } else {
        ampm = "PM";
    }

    if (hour > 12) {
        hour = hour - 12;
    } else if (hour == 0) {
        hour = 12;
    }




    document.getElementById("hr").innerHTML = hour + ":" + minute + ":" + second + "   " + ampm;
    document.getElementById("day").innerHTML = days[date.getDay()] + " , " + date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear();


}, 1000);