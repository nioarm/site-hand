/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");

function valider() {
	
	alert("ok")
	var nom = document.forms["nom"]["nom"].value;
	var rep1 = document.forms["q1"]["pays"].value;
	var rep2 = document.forms["q2"]["poste"].value;
  var rep3 = document.forms["q3"]["JO"].value;
	var rep4 = document.forms["q4"]["nom_radio"].value;
	var rep5 = document.forms["q5"]["nom_radio"].value;
	var resultat = 0;
	
	
	if (rep1 == "au Danemark") {resultat += 1};
  
	if (rep2 == "5") {resultat += 1};
	
	if (rep3 == "en 1828") {resultat += 1};
	
	if (rep4 == "truc") {resultat += 1};
	
	if (rep5 == "truc") {resultat += 1};
	
	alert(resultat);
	document.getElementaryById("texte").innerHTML =  "Merci pour ta participation" + nom + "! Tu as" + resultat + "bonne/s réponse/s !";
	
	
}

