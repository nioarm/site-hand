/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");

function valider() {
	
	alert("ok")
	var nom = document.forms["nom"]["nom"].value;
	var rep1 = document.forms["q1"]["pays"].value;
	var rep2 = document.forms["q2"]["JO"].value;
  var rep3 = document.forms["q3"]["poste"].value;
	var rep4 = document.forms["q4"]["durée"].value;
	var rep5 = document.forms["q5"]["pas"].value;
  var rep6 = document.forms["q6"]["cmonde"].value;
  var rep7 = document.forms["q7"]["médaille"].value;
	var resultat = 0;
	
	
	if (rep1 == "au Danemark") {resultat += 1};
  
	if (rep2 == "en 1928") {resultat += 1};
	
	if (rep3 == "5") {resultat += 1};
	
	if (rep4 == "60 minutes") {resultat += 1};
	
	if (rep5 == "3") {resultat += 1};
  
  if (rep6 == "6 coupes") {resultat += 1};
  
  if (rep7 == "médaille d'argent") {resultat += 1};
  alert("Merci pour ta participation" + nom + "! Tu as" + resultat + "bonne/s réponse/s !")
	document.getElementaryById("texte").innerHTML = "Merci pour ta participation " + nom + "! Tu as" + resultat + " bonne/s réponse/s !"
	
	
}

