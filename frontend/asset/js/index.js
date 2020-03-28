var login = localStorage.getItem('login');
var backend = localStorage.getItem('backend');

$("#button-disconnect").on('click', function(event) {
    localStorage.clear();
    document.location.href = "connection.html";

});