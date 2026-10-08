window.TrelloPowerUp.initialize({

    "board-buttons": function (t) {

        return [{

            text: "🧰 Toolbox",

            callback: function (t) {

                return t.popup({

                    title: "Refurbishment Team Tools",

                    url: "./index.html",

                    height: 520

                });

            }

        }];

    }

});
