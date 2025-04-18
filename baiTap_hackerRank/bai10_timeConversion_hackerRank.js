function timeConversion(s) {
    // Write your code here
    let ampm = s.slice(-2); // Get AM or PM
    let [hours, minutes, seconds] = s.slice(0, -2).split(":");
    hours = parseInt(hours);
    if (ampm === "AM" && hours === 12) {
        hours = 0;
    } else if (ampm === "PM" && hours !== 12) {
        hours += 12;
    }
    // Pad hours to 2 digits
    hours = hours.toString().padStart(2, '0');

    return `${hours}:${minutes}:${seconds}`;
}

console.log(timeConversion("07:05:45PM"))