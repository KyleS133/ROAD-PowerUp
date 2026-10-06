document.addEventListener("DOMContentLoaded", function () {

    const links = {

        dashboard: "https://app.powerbi.com/groups/me/reports/0921b335-11d2-4e82-bfeb-b53cd5991717/99b4ca4e00a6cb4e873d?ctid=a433be3d-5ba0-4873-a173-a72aee7c225d&experience=power-bi",

        operations: "#",

        receiving: "#",

        repair: "#",

        attention: "#"

    };

    document.getElementById("dashboard").onclick = function (e) {

        e.preventDefault();

        window.open(links.dashboard, "_blank");

    };

});
