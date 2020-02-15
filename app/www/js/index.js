const FOAF = $rdf.Namespace('http://xmlns.com/foaf/0.1/');
const auth = solid.auth;
const fc = new SolidFileClient(auth);
const popupUri = '../popup.html';
const x = 'https://kthezelais.solid.community/CaptureIT/';
var userStoragePOD = "";

// Fonction de téléchargement d'une image
function downloadURI(uri, name) {
    var link = document.createElement("a");
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    delete link;
}

// Gestion de la connexion/déconnexion de l'utilisateur
$('#login').click(() => solid.auth.popupLogin({ popupUri }));
$('#logout').click(() => solid.auth.logout());

// Envoyer une image en local sur son POD
$('#submit').click(() => {
    var newFile = $('input[type=file]')[0].files[0];
    fc.createFile(x + newFile.name, newFile, newFile.type);
    alert('Le fichier ' + newFile.name + ' a été ajouté !');
});

// Envoyer une requête de création d'un nouveau répertoire dans CaptureIT
$('#submit-2').click(() => {
    var newFolder = $('#new-folder').val();
    fc.createFolder(x + newFolder);
    alert('Le dossier ' + newFolder + ' a été créé !');
});

// Télécharge le fichier à l'adresse de l'élément file-to-download
$('#download').click(() => {
    downloadURI(userStoragePOD + $('#file-to-download').val(), $('#file-to-download').val());
});

// Mise à jour des éléments de la page en fonction du statut de la connexion
solid.auth.trackSession(session => {
    const loggedIn = !!session;
    $('#login-view').toggle(!loggedIn);
    $('#is-connected').toggle(loggedIn);
    if (loggedIn) {
        userStoragePOD = session.webId.slice(0, session.webId.length - 16) + "/CaptureIT/";
    }
});