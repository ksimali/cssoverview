function ajouterItem(produit, quantite, prix){
    //A ajouter du code ici.
    var nouvelleLigne = "<tr>";
    nouvelleLigne += "<td>" + produit + "</td>";
    nouvelleLigne += "<td>" + quantite + "</td>"; 
    nouvelleLigne += "<td>" + prix + "</td>"; 
    nouvelleLigne += "</tr>";

    var ancienContenu = document.getElementById("corpsTableau").innerHTML;
    var nouveauContenu = ancienContenu + nouvelleLigne;
    document.getElementById("corpsTableau").innerHTML = nouveauContenu;

    var nombreItemPanier = parseInt(document.getElementById("idItem").innerHTML);
    nombreItemPanier += parseInt(quantite);
    document.getElementById("idItem").innerHTML = nombreItemPanier;
}

function afficherFacture() {
    document.getElementById("zoneContenuItem").style.display = "none";
    document.getElementById("zoneContenuFacture").style.display = "block";
}

document.addEventListener('click', function (event) {
    if (event.target.id == 'panier') {
        afficherFacture();
    }
})
