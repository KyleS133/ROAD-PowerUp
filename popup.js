document.addEventListener("DOMContentLoaded", function () {

    function comingSoon(e) {
        e.preventDefault();
        alert("Coming Soon");
    }

    const dashboard = document.getElementById("dashboard");

    if (dashboard) {

        dashboard.addEventListener("click", function (e) {

            e.preventDefault();

            window.open(
                "https://app.powerbi.com/links/8x0b1V4H-5?ctid=a433be3d-5ba0-4873-a173-a72aee7c225d&pbi_source=linkShare",
                "_blank",
                "noopener,noreferrer"
            );

        });

    }

    const operations = document.getElementById("operations");
    const receiving = document.getElementById("receiving");
    const repair = document.getElementById("repair");
    const attention = document.getElementById("attention");

    if (operations) operations.addEventListener("click", comingSoon);
    if (receiving) receiving.addEventListener("click", comingSoon);
    if (repair) repair.addEventListener("click", comingSoon);
    if (attention) attention.addEventListener("click", comingSoon);

});

});
