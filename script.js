const updateClock = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // Format time
    const formattedHours = hours % 12 || 12; // Convert to 12-hour format
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');

    // Update DOM elements
    document.getElementById('hrs').innerText = formattedHours;
    document.getElementById('mins').innerText = formattedMinutes;
    document.getElementById('secs').innerText = formattedSeconds;
    document.getElementById('ampm').innerText = ampm;

    // Update stroke-dasharray for circular progress
    const hourProgress = (formattedHours / 12) * 440; // Circle length: 440
    const minuteProgress = (minutes / 60) * 440;
    const secondProgress = (seconds / 60) * 440;

    document.getElementById('hh').style.strokeDasharray = `${hourProgress} 440`;
    document.getElementById('mm').style.strokeDasharray = `${minuteProgress} 440`;
    document.getElementById('ss').style.strokeDasharray = `${secondProgress} 440`;
};

// Initialize clock and update every second
setInterval(updateClock, 1000);
updateClock();
