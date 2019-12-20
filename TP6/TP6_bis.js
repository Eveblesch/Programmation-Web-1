function Etudiant(nom, prenom, numero, filiere)
{
    this.nom = nom;            //Récuperation des informations
    this.prenom=prenom;
    this.numero=numero;
    this.filiere=filiere;
    this.sePresenter=function()
    {
        return "Bonjour, je m'appelle " + this.nom + " " + this.prenom + " " + "et je suis en cursus " + this.filiere;
        
    };
        
    this.reorienter=function(changement)
    {

        if(changement!=="CMI" && changement!=="Math" && changement!=="Info" )
        {    
            alert("Le cursus n'existe pas, veuillez choisir entre Math, Info et CMI");
            return "erreur";
        }
        else
        {
            return "Bonjour, je m'appelle " + this.prenom + " " + this.nom + " et je me réoriente en cursus " + changement;
            
        }

    };

}


function afficher()
{   var nom=document.getElementById("nom").value; // recuperation des données
    var prenom=document.getElementById("prenom").value;
    var numero=document.getElementById("numero").value;
    var filiere=document.getElementById("cursus").value;

    var new_etudiant= new Etudiant(nom,prenom,numero,filiere); //création d'un nouvel étudiant
    document.getElementById("modifDOM").innerHTML += "<br>" + new_etudiant.sePresenter(); 
    // On récupere l'element via son id (modiDOM). .innerHTMl retourne le contenu de l'élément.
    // On y ajoute la présention de l'étudiant dans le fichier HTML.

}
function afficher_reorientation()
{
    var nom=document.getElementById("nom").value;
    var prenom=document.getElementById("prenom").value;
    var numero=document.getElementById("numero").value;
    var filiere=document.getElementById("cursus").value;
    var changement2=document.getElementById("changement").value;
    
    var new_etudiant= new Etudiant(nom,prenom,numero,filiere); //Initialisation d'un nouvel étudiant
    var testBIS=new_etudiant.reorienter(changement2); 
    document.getElementById("modifDOM").innerHTML += "<br>" + testBIS; 
    //Renvoie la présentation de l'étudiant dans le fichier HTML avec sa nouvelle filière en dessous de la presentation de base.

    
}




/*******************************************************/
//PARTIE 2: 

function ajouter_description()
{
    document.getElementById("description").style.display="inline"; // on change la propriété display par inline au lieu de none
}

function enlever_description()
{
    document.getElementById("description").style.display="none"; //On change la propriété display en none.
}

