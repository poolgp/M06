function calcula() {
    var formulari = document.getElementById("myForm");
    var nom = formulari.nom.value;
    var edat = formulari.edat.value;
    var sexe = formulari.querySelector('input[name="sexe"]:checked');
    var accepta = formulari.accepta.checked;

    if (nom === "" || edat < 1 || edat > 100 || !sexe || !accepta) {
        alert("Si us plau, omple tots els camps correctament.");
    } else {
        formulari.reset();
        alert("Dades enviades correctament.");
    }
};