// declaration fonction ajouterItem
function ajouterItem(produit, quantite, prix) {

    var nouvelleLigne = "<tr>"; // permet de creer une nouvelle ligne dans le tableau dans la zoneContenuFacture
    nouvelleLigne += "<td>" + produit + "</td>"; // permet de creer une cellule avec le nom du produit
    nouvelleLigne += "<td>" + quantite + "</td>"; // permet de creer une cellule avec la quantite du produit
    nouvelleLigne += "<td>" + prix + "</td>"; // permet de creer une cellule avec le prix du produit
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
        // cacher la zone qui contient les items
        document.getElementById("zoneContenuItem").style.display = "none";
        // afficher la zone qui contient la facture
        document.getElementById("zoneContenuFacture").style.display = "flex";
    }
    else {
        // cacher la zone qui contient les items
        document.getElementById("zoneContenuItem").style.display = "flex";
        // afficher la zone qui contient la facture
        document.getElementById("zoneContenuFacture").style.display = "none";
    }
    
}