document.addEventListener("DOMContentLoaded", function () {

    const buttons = document.querySelectorAll(".game-card button");

    buttons.forEach(btn => {
        btn.addEventListener("click", function () {
            alert("Game launching soon!");
        });
    });

});