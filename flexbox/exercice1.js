// declaration fonction ajouterItem
function ajouterItem(produit, quantite, prix) {

    var nouvelleLigne = "<tr>"; // permet de creer une nouvelle ligne dans le tableau dans la zone contenant la facture
    nouvelleLigne += "<td>" + produit + "</td>"; // permet de creer une cellule avec le nom du produit
    nouvelleLigne += "<td>" + quantite + "</td>"; // permet de creer une cellule avec la quantite du produit
    nouvelleLigne += "<td>" + prix + "</td>"; // permet de creer une cellule avec le prix du produit
    nouvelleLigne += "</tr>";

    // affectation des produits à la variable ancienContenu
    var ancienContenu = document.getElementById("corpsTableau").innerHTML;

    // ajouter la nouvelle ligne au ancien contenu et affecter la nouvelle liste de produits a la variable nouveauContenu
    var nouveauContenu = ancienContenu + nouvelleLigne;
    // affectation de la liste des produits actualisé au corps de tableau dans la zone de la facture
    document.getElementById("corpsTableau").innerHTML = nouveauContenu;

    // incrementation de l'affichage du nombre de produits dans le panier
    var nombreItemPanier = parseInt(document.getElementById("idItem").innerHTML);
    nombreItemPanier += parseInt(quantite);
    document.getElementById("idItem").innerHTML = nombreItemPanier;
}


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