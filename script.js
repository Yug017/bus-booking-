document.addEventListener("DOMContentLoaded", function () {
    // Retrieve booking details from localStorage
    const passengerName = localStorage.getItem("passengerName") || "Not Provided";
    const busNumber = localStorage.getItem("busName") || "N/A";
    const seatNumbers = JSON.parse(localStorage.getItem("selectedSeats")) || [];
    const departure = localStorage.getItem("departure") || "N/A";
    const destination = localStorage.getItem("destination") || "N/A";
    const date = localStorage.getItem("travelDate") || "N/A";
    const time = localStorage.getItem("busTime") || "N/A";
    const totalFare = seatNumbers.length * 10; // Assuming $10 per seat

    // Populate ticket details
    document.getElementById("passengerName").innerText = passengerName;
    document.getElementById("busNumber").innerText = busNumber;
    document.getElementById("seatNumber").innerText = seatNumbers.join(", ");
    document.getElementById("departure").innerText = departure;
    document.getElementById("destination").innerText = destination;
    document.getElementById("date").innerText = date;
    document.getElementById("time").innerText = time;
    document.getElementById("totalFare").innerText = totalFare;
});
