
//Partie 1
//Question 1
var tab=[10,15,6,14,14,13,19,10,17,9];

//Question 2
//Boucle for
function afficher_for(tab)
{
	var chaine_resultat="Notes:";
	for(var i=0; i<tab.length; i++) 
	{ 
		chaine_resultat+="\n" + tab[i]; 

	} 
	var afficher_resultat=document.getElementById("demoJS");
	afficher_resultat.innerHTML=chaine_resultat;
return chaine_resultat;
}

//afficher_for(tab);

//Boucle while
function afficher_while(tab)
{
	var i=0;
	var chaine_resultat='Notes: ';
	while(i<tab.length)
	{
		chaine_resultat+=tab[i]+'\n';
		i++;
	}
	var afficher_resultat=document.getElementById("demoJS");
	afficher_resultat.innerHTML=chaine_resultat;
	
return chaine_resultat;
}

//afficher_while(tab);

//Question 3
//Boucle for

function afficher_bool_for(tab,boolean)
{	
	var chaine_resultat="Notes:";
	for(var i=0; i<tab.length; i++) 
	{ 
		if (boolean===true)
			chaine_resultat+="\n" + tab[i]; 
		else
			if(tab[i]>=15)
			chaine_resultat+=tab[i] + '\n';

	} 
	var afficher_resultat=document.getElementById("demoJS");
	afficher_resultat.innerHTML=chaine_resultat;
return chaine_resultat;
}

//afficher_bool_for(tab, false);

//Boucle While
function afficher_bool_while(tab, booleen)

{
	var i=0;
	var chaine_resultat="Notes:";
	while(i<tab.length)
	{
		if (booleen===true)
		{
			chaine_resultat+="\n" + tab[i]; 
				i++;
		}

		else
		{
			if(tab[i]>=15)
			{
				chaine_resultat+=tab[i] + "\n";
				i++;
			}
		}	
	}	
	var afficher_resultat=document.getElementById("demoJS");
	afficher_resultat.innerHTML=chaine_resultat;
	
return chaine_resultat;
}

//afficher_bool_while(tab, true);


//Question 4
function afficher_bool_alerte(tab,booleen)
{
	var chaine_resultat="Notes:";
	if(booleen===true || booleen===false)
	{
		for(var i=0; i<tab.length; i++) 
		{ 
			if (booleen===true)
			{	
				chaine_resultat+=tab[i]+"\n"; 
			
			}
			else
				{
					if(tab[i]>=15)
						{chaine_resultat+=tab[i] + "\n";}
				} 
		}	
	}
	else
	{
		chaine_resultat="";
		alert("Erreur, le deuxième argument doit être un booléen");
		/*On créer une alerte si le second argument rentré n'est pas un booléen*/
	}

var afficher_resultat=document.getElementById("demoJS");
	afficher_resultat.innerHTML=chaine_resultat;

return chaine_resultat;
}


//afficher_bool_alerte(tab,5);



//Partie 3
//Question 2
function recuperation_donnees1()
{	
	var chaine_resultat=" ";
	chaine_resultat = document.getElementById("nom").value + "\n" + document.getElementById("prenom").value + "\n" + document.getElementById("numero").value;
	var afficher_resultat=document.getElementById("demoJS");
	afficher_resultat.innerHTML=chaine_resultat;

}
/*On recupère grâce aux ID de chaque champ les informations que l'utilisateur rentre et 
 on le stocke dans un variable (chaine_resultat). La concaténation se fait avec des + .
 Enfin, on affiche cette chaine dans le document.*/




//Partie 4
//Question 1d
function recuperation_donnees2() 
{

	var chaine_resultat=" "; 						/*Initialisation de la chaine de caractère*/
	chaine_resultat = document.getElementById("nom").value + "\n" + document.getElementById("prenom").value + "\n" + document.getElementById("numero").value;
    var para = document.createElement("P");			/*création d'un élément de type paragraphe*/
    var text = document.createTextNode(chaine_resultat); /*création de son textnode*/
    para.appendChild(text);							/* On attache le textnode (text) au paragraphe (para)*/
    document.getElementById("modifDOM").appendChild(para); /* On attache le paragraphe au bloc modifDOM*/
   
}

// Question 3
function recuperation_donnees3()
{
	var chaine_resultat=" ";	
	chaine_resultat = document.getElementById("nom").value + "\n" + document.getElementById("prenom").value + "\n" + document.getElementById("numero").value;
    var para = document.createElement("P");			
    var text = document.createTextNode(chaine_resultat);
    para.appendChild(text);							
    document.getElementById("modifDOM").appendChild(para);
   
	var nbre_elements=document.getElementsByTagName("P"); 	/*Variable qui récupère le nombre d'éléments du type Paragraphe*/
	alert(nbre_elements.length-1); /*On creer une alerte qui affiche la variable qui donne le nombre d'éléments. 
									On doit enlever 1 car la balise <p> compte déjà comme un élément*/
}



