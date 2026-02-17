document.addEventListener("DOMContentLoaded", function () {

    const ctaButton = document.querySelector(".cta-button");
    const hours = document.getElementById("hours");

    ctaButton.addEventListener("click", function () {
        alert("Launching your gaming adventure!");
    });

    // Simulate hours increasing every 10 seconds
    setInterval(function () {
        let current = parseInt(hours.textContent);
        hours.textContent = current + 1;
    }, 10000);

});
