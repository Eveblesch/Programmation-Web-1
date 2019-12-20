
//1) Utilisation de jQuery dans un document web

$(document).ready(function()
{
	$("p").click(function()		// quand on clique sur un paragraphe, on affiche une alerte avec le texte du paragraphe
	{
		alert("!!!FONCTION TEST PARAGRAPHE !!! " + $(this).text());
	});

});

//question2
$(document).ready(function()
{
	$(".classe").click(function()	//idem avec le texte qui contient la classe.
	{
		alert("!!!FONCTION TEST CLASSE !!! "+ $(this).text());
	});

});

$(document).ready(function()
{
	$("#identifiant").click(function() //idem avec un identifiant
	{
		alert("!!!FONCTION TEST IDENTIFIANT !!! "+ $(this).text());
	});

});


//2) Visibilité des éléments

// Sans la fonction Callback

$(".callback").ready(function() // la classe callback englobe les 3 lignes de texte
{
	$(document).click(function(){		//quand on clique sur le texte qui a comme classe "disparaitre", on entraine les 3 événements suivants.
		$(".disparaitre").hide(); //Q1: Masquer l'élément
		$(".disparaitre").css("font-size","35px"); // Q2 : Modifier le texte
		$(".disparaitre").show(); // Q3 : Afficher l'élement
	});
});



//Avec la fonction Callback

$(".callback").ready(function()
{
	$(".disparaitre").click(function() 

	{
		$(this).hide('slow', function(){  //On rajoute une fonction de rappel qui va permettre d'attendre que
		$(this).css("font-size","25px");  // l'effet de disparition se finisse avant de passer à la suite.
		$(this).show(700); //L'argument 700 correspond à la vitesse de réaparition
		});
	});
});




//3) Modifier le texte d’un élément

function information()
{	//On récupère les informations dans des variables:
	var nom=$("#nom").val(); // val() retourne les valeurs des champs de formulaires
	var prenom=$("#prenom").val();
	var numero=$("#numero").val();
	var filiere=$("#cursus").val();
	var affichage_informations="Je m'appelle "+ nom + " " + prenom +", mon numéro étudiant est " + numero +" et je suis en  "+ filiere;
	$("#afficher").text(affichage_informations); //text() retourne le contenu textuel de l’élément sélectionné
	// on a crée dans le code HTML un div avec à l'interieur une balise <p> contenant l'identifiant "afficher". On affiche les informations à l'intérieur
	//du document.
}








