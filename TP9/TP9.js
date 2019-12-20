/*****************************************************************/
//TP8 partie 1

$(document).ready(function()
{
	$('#button').click(function(){
		var test=document.getElementById("ajouter").value;
		if(test === "")								//Si le champ est vide on renvoit une alerte
			{alert("Erreur : champ vide");}
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


	
/*****************************************************************/
//TP8 partie2

function ListItem(chaine_tache,booleen){
	this.chaine_tache=chaine_tache; 
	this.booleen=booleen;
	

	if (typeof(booleen) === "boolean" && typeof(chaine_tache)==="string"){  //Verification des types
		$(document).ready(function(){	
			$("#sauvegarde").click(function()				 				//Quand on clique sur le bouton "Sauvegarder liste",
			{
				document.getElementById("demoJS").innerHTML= " "; 			//On reinitialise

	  			$( "li" ).each(function(){									//On recupère chaque élément de la classe "li"	
		
				
				//1.3.b) 
				var elem = $(this).text();									//On recupère la valeur de l'élément
				var bool = $(this).hasClass(chaine_tache);					//On récupère son état


				var obj={"Element": elem, "Bool": bool};
				var objJSON = JSON.stringify(obj); 							//On transforme en texte
				document.getElementById("demoJS").innerHTML += obj.Element + " " + obj.Bool + "<br>"; //On affiche
				
				});
			});


		});	

	}
	else{
		alert("C'est faux");
	}

}

//console.log(ListItem("apresClic",true));

/*****************************************************************/
//2 Sauvegarde de la liste
function ListItem2(chaine_tache,booleen){
	this.chaine_tache=chaine_tache; 
	this.booleen=booleen;
	

	if (typeof(booleen) === "boolean" && typeof(chaine_tache)==="string"){ //Verification des types
		$(document).ready(function(){	
			$("#sauvegarde").click(function()				 					//Quand on clique sur le bouton "Sauvegarder liste",
			{																	
				document.getElementById("demoJS").innerHTML = " ";
				localStorage.clear();

	  			$( "li" ).each(function(){										// On recupère chaque élément de la classe "li"	
				
				if (typeof(Storage) !== "undefined"){
					var elem = $(this).text();
					var bool = $(this).hasClass(chaine_tache);
					var obj=[];													//On crée un tableau vide dans lequel on rajoutera les éléments
					obj.push(elem  + " " + bool+ "<br>");	

					var affichage={"Element": elem, "Bool": bool}; 
					var objJSON=JSON.stringify(affichage); 						//Transforme en texte

					document.getElementById("demoJS").innerHTML += obj;
					localStorage.setItem(elem, objJSON);}						//Ajoute la clé dans le storage
					
				else
					{alerte("Erreur local storage");}
				});
			});
		});	
	}
	else{
		alert("C'est faux");	
	}
}

//console.log(ListItem2("apresClic",true));

/*****************************************************************/
//3. Restaurer une liste

function ListItem3(chaine_tache,booleen){
	this.chaine_tache=chaine_tache; 
	this.booleen=booleen;
	

	if (typeof(booleen) === "boolean" && typeof(chaine_tache)==="string"){ 
		$(document).ready(function(){	
			$("#sauvegarde").click(function()				 					
			{																	
				document.getElementById("demoJS").innerHTML = " ";
				localStorage.clear();
	  			
	  			$( "li" ).each(function(){										
				
				if (typeof(Storage) !== "undefined"){
					var elem = $(this).text();
					var bool = $(this).hasClass(chaine_tache);
					var obj=[];													
					obj.push(elem  + " " + bool+ "<br>");	

					var affichage = {"Element": elem, "Bool": bool}; 
					var objJSON = JSON.stringify(affichage); 						

					document.getElementById("demoJS").innerHTML += obj;
					localStorage.setItem(elem, objJSON);
					
      			}
					
				else
					{alert("Erreur local storage");}



				});
			});

			//3.2
			$("#restauration").click(function()
			{
		
  					document.getElementById("recup_tab").innerHTML =""; 		//On réinitialise
  					if (typeof(Storage) !== "undefined"){
  						document.getElementById("recup_tab").innerHTML = "Récupération du tableau et restauration de la liste" + "<br>"+ "<br>";
				  		for (var i = 0; i<localStorage.length; i++){			//On passe par tous les éléments du localStorage
				  				var cle = localStorage.key(i);					//On récupère la clé de l'élément de l'itération
					  			var recup = localStorage.getItem(cle);			//On récupère l'élément correspondant à la clé
					  			
					  			var recuperationJSON=JSON.parse(recup);			
					  			if(recuperationJSON.Bool===false){				//On prend seulement les éléments dont l'état bool est false

					  			var affichage = recuperationJSON.Element + " " + recuperationJSON.Bool + "<br>"; 
					  			document.getElementById("recup_tab").innerHTML += affichage;		//On affiche ces éléments
					  		}
				  		}
			  		}
			  		else
			  			{alert("Erreur local Storage");}


			});	
			
		});	
	}
	else{
		alert("C'est faux");	//Erreur si les types ne sont pas bons
		}
}

console.log(ListItem3("apresClic",true));




