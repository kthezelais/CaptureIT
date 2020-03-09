/*
 *  Get a statement by its ID, and the LRS endPoint.
 *  parameters user and password are required to (auth created in LRS DB.
 *
 *  return : object of the $.ajax() request.
 *      SUCCESS : <result_var>.status == 200
 *      ERROR : <result_var>.status == 400
 * 
 *  Check with status attribut to see if the request works or not.
 */
function getStatementById(endPoint, id, user, password) {
    auth = btoa(user + ':' + password);

    return $.ajax({
        beforeSend: function(req) {
            req.setRequestHeader("Content-Type", "application/json");
            req.setRequestHeader("Authorization", "Basic " + auth);
            req.setRequestHeader("X-Experience-API-Version", "1.0.0");
            console.log("Headers sucessfully initialized");
        },

        async: false,
        url: endPoint + "/trax/ws/xapi/statements",
        type: "GET",
        data: "statementId=" + id,

        success: function(resultat, statut, erreur) {
            console.log("RESULTAT : \n" + JSON.stringify(resultat) + "\n\nSTATUT : " + statut + "\n\nERREUR : " + JSON.stringify(erreur));
        },

        error: function(resultat, statut, erreur) {
            console.log("RESULTAT : \n" + JSON.stringify(resultat) + "\n\nSTATUT : " + statut + "\n\nERREUR : " + JSON.stringify(erreur));
        }

    });
}


/*
 *  Get an answer from the LRS to check if it works.
 *
 *  return : object of the $.ajax() request.
 *      SUCCESS : <result_var>.status == 200
 *      ERROR : <result_var>.status == 400
 * 
 *  Check with status attribut to see if the request works or not.
 */
function getAboutLRS(endPoint) {
    return $.ajax({
        beforeSend: function(req) {
            console.log("Headers sucessfully initialized");
        },

        async: false,
        type: "GET",
        url: endPoint + "/trax/ws/xapi/about",
        dataType: "json",

        success: function(resultat, statut, erreur) {
            console.log("RESULTAT : \n" + JSON.stringify(resultat) + "\n\nSTATUT : " + statut + "\n\nERREUR : " + JSON.stringify(erreur));
        },

        error: function(resultat, statut, erreur) {
            console.log("RESULTAT : \n" + JSON.stringify(resultat) + "\n\nSTATUT : " + statut + "\n\nERREUR : " + JSON.stringify(erreur));
        }
    });
}

//http://127.0.0.1:8000/trax/ws/xapi/statement

/*
 *  Get a statement by its ID, and the LRS endPoint.
 *  parameters user and password are required to (auth created in LRS DB.
 *
 *  return : object of the $.ajax() request.
 *      SUCCESS : <result_var>.status == 200
 *      ERROR : <result_var>.status == 400
 * 
 *  Check with status attribut to see if the request works or not.
 */
function getStatements(endPoint, user, password) {
    auth = btoa(user + ':' + password);

    return $.ajax({
        beforeSend: function(req) {
            req.setRequestHeader("Content-Type", "application/json");
            req.setRequestHeader("Authorization", "Basic " + auth);
            req.setRequestHeader("X-Experience-API-Version", "1.0.0");
            console.log("Headers sucessfully initialized");
        },

        async: false,
        url: endPoint + "/trax/ws/xapi/statements",
        type: "GET",
        dataType: "json",

        success: function(resultat, statut, erreur) {
            console.log("RESULTAT : \n" + JSON.stringify(resultat) + "\n\nSTATUT : " + statut + "\n\nERREUR : " + JSON.stringify(erreur));
        },

        error: function(resultat, statut, erreur) {
            console.log("RESULTAT : \n" + JSON.stringify(resultat) + "\n\nSTATUT : " + statut + "\n\nERREUR : " + JSON.stringify(erreur));
        }

    });
}