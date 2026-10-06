window.TrelloPowerUp.initialize({

    "board-buttons": function (t) {

        return [{

            text: "🚀 ROAD",

            callback: function (t) {

                return t.popup({

                    title: "ROAD",

                    url: "./index.html",

                    height: 180

                });

            }

        }];

    }

});
