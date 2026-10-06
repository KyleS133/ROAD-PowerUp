document.addEventListener("DOMContentLoaded", function () {

    const links = {

        dashboard: "https://app.powerbi.com/links/8x0b1V4H-5?ctid=a433be3d-5ba0-4873-a173-a72aee7c225d&pbi_source=linkShare",

        operations: "#",

        receiving: "#",

        repair: "#",

        attention: "#"

    };

    function attachButton(id, url) {

        const button = document.getElementById(id);

        if (!button) return;

        button.addEventListener("click", function (e) {

            e.preventDefault();

            if (url !== "#") {
                window.open(url, "_blank", "noopener,noreferrer");
            } else {
                alert("Coming Soon");
            }

        });

    }

    attachButton("dashboard", links.dashboard);
    attachButton("operations", links.operations);
    attachButton("receiving", links.receiving);
    attachButton("repair", links.repair);
    attachButton("attention", links.attention);

});
