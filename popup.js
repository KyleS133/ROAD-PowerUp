window.TrelloPowerUp.initialize({

    'board-buttons': function (t) {

        return [{
            text: '🚀 ROAD',

            callback: function (t) {

                return t.popup({

                    title: 'ROAD Operations',

                    url: './index.html'

                });

            }

        }];

    }

});

document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("dashboard").onclick = function (e) {

        e.preventDefault();

        window.open(
            "https://app.powerbi.com/links/8x0b1V4H-5?ctid=a433be3d-5ba0-4873-a173-a72aee7c225d&pbi_source=linkShare",
            "_blank"
        );

    };

});
