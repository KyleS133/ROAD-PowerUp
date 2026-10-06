document.addEventListener("DOMContentLoaded", function () {

    const links = {

        dashboard: "https://app.powerbi.com/links/8x0b1V4H-5?ctid=a433be3d-5ba0-4873-a173-a72aee7c225d&pbi_source=linkShare",

        operations: "https://app.powerbi.com/groups/me/reports/0921b335-11d2-4e82-bfeb-b53cd5991717/fea025b939ccd76e7ea8?ctid=a433be3d-5ba0-4873-a173-a72aee7c225d&experience=power-bi",

        receiving: "https://app.powerbi.com/groups/me/reports/0921b335-11d2-4e82-bfeb-b53cd5991717/c94ad2e92a93135a2341?ctid=a433be3d-5ba0-4873-a173-a72aee7c225d&experience=power-bi",

        repair: "https://app.powerbi.com/groups/me/reports/0921b335-11d2-4e82-bfeb-b53cd5991717/1be1c83cc0040626b577?ctid=a433be3d-5ba0-4873-a173-a72aee7c225d&experience=power-bi",

        attention: "https://app.powerbi.com/groups/me/reports/0921b335-11d2-4e82-bfeb-b53cd5991717/772dd2a43d66b4048611?ctid=a433be3d-5ba0-4873-a173-a72aee7c225d&experience=power-bi"

    };

    function attachButton(id, url) {

        const button = document.getElementById(id);

        if (!button) return;

        button.addEventListener("click", function (e) {

            e.preventDefault();

            window.open(url, "_blank", "noopener,noreferrer");

        });

    }

    attachButton("dashboard", links.dashboard);
    attachButton("operations", links.operations);
    attachButton("receiving", links.receiving);
    attachButton("repair", links.repair);
    attachButton("attention", links.attention);

});

});
