document.addEventListener("DOMContentLoaded", function () {

    const dashboard = document.getElementById("dashboard");

    if (!dashboard) return;

    dashboard.addEventListener("click", function (e) {

        e.preventDefault();

        window.open(
            "https://app.powerbi.com/links/8x0b1V4H-5?ctid=a433be3d-5ba0-4873-a173-a72aee7c225d&pbi_source=linkShare",
            "_blank",
            "noopener,noreferrer"
        );

    });

});

});
