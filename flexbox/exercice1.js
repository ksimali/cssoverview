// declaration fonction ajouterItem
function ajouterItem(produit, quantite, prix) {

    // declaration de la variable nouvelleLigne et
    // affectation du string "<tr>" a la variable nouvelleLigne
    var nouvelleLigne = "<tr>";
    // ajout du string "<tr>", de la variable/parametre produit et du string "</tr>" a la variable nouvelleLigne
    nouvelleLigne += "<td>" + produit + "</td>";
    // ajout du string "<tr>", de la variable/parametre quantite et du string "</tr>" a la variable nouvelleLigne
    nouvelleLigne += "<td>" + quantite + "</td>";
    // ajout du string "<tr>", de la variable/parametre prix et du string "</tr>" a la variable nouvelleLigne
    nouvelleLigne += "<td>" + prix + "</td>";
    // affectation du string "</tr>" a nouvelleLigne
    nouvelleLigne += "</tr>";

    // declaration de la variable ancienContenu et
    // affectation du contenu HTML du corps du tableau a la variable ancienContenu
    var ancienContenu = document.getElementById("corpsTableau").innerHTML;
    // declaration de la variable nouveauContenu et
    // affectation de la valeur de la variable ancienContenu, et de la valeur de la variable nouvelleLigne
    var nouveauContenu = ancienContenu + nouvelleLigne;
    // affectation de la valeur de la variable nouveauContenu au contenu HTML du corps du tableau
    document.getElementById("corpsTableau").innerHTML = nouveauContenu;


    var nombreItemPanier = parseInt(document.getElementById("idItem").innerHTML);
    nombreItemPanier += parseInt(quantite);
    document.getElementById("idItem").innerHTML = nombreItemPanier;
}
// fin fonction ajouterItem


function afficherFacture () {
    // si les items sont affichés
    if (document.getElementById("zoneContenuFacture").style.display == "none") {
        // cacher les items
        document.getElementById("zoneContenuItem").style.display = "none";
        // afficher la facture
        document.getElementById("zoneContenuFacture").style.display = "flex";
    }
    else {
        // permet de cacher la zone qui contient les items
        document.getElementById("zoneContenuItem").style.display = "block";
        // permet d'afficher la zone qui contient la facture
        document.getElementById("zoneContenuFacture").style.display = "flex";
    }
    
}