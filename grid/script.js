
/* fonction d'ajout d'article*/
function ajouterItem(produit, quantite, prix){
    var nouvelleLigne = "<tr>";
    nouvelleLigne += "<td>" + produit +"</td>";
    nouvelleLigne += "<td>"+ quantite+"</td>";
    nouvelleLigne += "<td>"+ prix +"</td>";
    nouvelleLigne += "</tr>";

    var ancienContenu = document.getElementById("corpsTableau").innerHTML;
    var nouveauContenu = ancienContenu + nouvelleLigne;
    document.getElementById("corpsTableau").innerHTML = nouveauContenu;

    var nombreItemPanier = parseInt(document.getElementById("idItem").innerHTML);
    nombreItemPanier += parseInt(quantite);
    document.getElementById("idItem").innerHTML = nombreItemPanier;
}

// fonction affichage du tableau
function afficherFacture(){
    if(document.getElementById("zoneContenuFacture").style.display == "none"){
        document.getElementById("zoneContenuItem").style.display = "none";
        document.getElementById("zoneContenuFacture").style.display = "block";

    }else{
        document.getElementById("zoneContenuItem").style.display = "grid";
        document.getElementById("zoneContenuFacture").style.display = "none";
    }
    

}
// recupérer un element object ayant pour id panier.
const panier = document.getElementById("panier");

// Ajout d'un event listener qui s'active quand l'utilisateur clique sur l'élement id panier
// et qui appel la methode afficherFacture.
panier.addEventListener("click", afficherFacture);