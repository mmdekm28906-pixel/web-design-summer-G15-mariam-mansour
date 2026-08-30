var degree = prompt("Enter your degree (0-100):");

if (degree === null || degree === "") {
    alert("Please enter your degree");
}
else if (degree > 100) {
    alert("Invalid degree");
}
else if (degree > 90) {
    alert("Excellent");
}
else if (degree > 80) {
    alert("Very good");
}
else if (degree > 70) {
    alert("Good");
}
else {
    alert("Failed");
}