
$(document).ready(function()
{
	$('#button').click(function(){
		var test=document.getElementById("ajouter").value;
		if(test==="")								//Si le champ est vide on renvoit une alerte
			{alert("Erreur : champs vide");}
		else
			{
				$("#navigation").append("<li class = "+" liste "+">" + test + "</li>");
			}										//Aussi non on ajoute à l'identifiant 'navigation' grâce à append une liste dont la classe est 'liste',
													// le texte rentré dans le champ, puis on ferme la balise.
	});

	$("#navigation").on("click", "li", function()	// lorsque l'on clique sur l'élément qui représente le li, 
	{ 	$(this).toggleClass('apresClic'); 			// (le nouvel item) alors on appelle la méthode toggleClass 					
													//qui va attribuer ou non la classe 'apresClic' à l'élément cliqué. 
	});
});


/*
function new_element()
{
	var create_element=document.createElement("li");	//creation de l'élément li qui sera dans la l'item crée dans la liste
	var text=document.getElementById("ajouter").value;	//on veut recuperer le texte quand on clique sur le bouton
	var paragraphe=document.createTextNode(text);		
	if (text === '') {
    alert("Item vide");
	}

	else{
	create_element.appendChild(paragraphe);
	document.getElementById("navigation").appendChild(create_element);
	create_element.className="liste";
  }
 
}
*/
	




