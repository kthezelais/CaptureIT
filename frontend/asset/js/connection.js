$("#form-login").on('submit', function(event) {
    var msg = "";
    var login = $('#login').val();
    var password = $('#password').val();
    var url = $('#server').val() + "/CaptureIT/backend/login.php";
    var backend = $('#server').val() + "/CaptureIT/backend/";

    auth = btoa(login + ':' + password);

    event.preventDefault();

    var data = '{' +
        '"content" : "' + auth + '"' +
        '}';

    var result = $.ajax({
        async: false,
        url: url,
        type: "POST",
        dataType: "json",
        data: data,

        success: function(resultat, statut, erreur) {
            console.log("RESULTAT : \n" + JSON.stringify(resultat) + "\n\nSTATUT : " + statut + "\n\nERREUR : " + JSON.stringify(erreur));
        },

        error: function(resultat, statut, erreur) {
            console.log("RESULTAT : \n" + JSON.stringify(resultat) + "\n\nSTATUT : " + statut + "\n\nERREUR : " + JSON.stringify(erreur));
        }

    });

    if (result.status == 404) {
        msg = "Impossible d'atteindre l'URL demandée.";
    } else if (result.status == 0) {
        msg = "Erreur : syntaxe de l'URL erronée";
    } else {
        msg = JSON.stringify(result.responseText);
        msg = msg.replace("\"", "").replace("\"", "");
    }

    $("#result").text(msg);

    if (result.status == 200) {
        localStorage.setItem('login', login);
        localStorage.setItem('backend', backend);
        localStorage.setItem('connected', true);
        document.location.href = "index.html";
    }

});