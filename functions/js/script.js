let myStr = "dit is een variabele van het datatype string"; //dit is een variabele van het datatype string, waarom?  _______omdat het tussen quotes is_______ vul je antwoord in op de lijn
let myInt = 3; //dit is een variabele van het datatype ____________ omdat het een nummer is ____________ vul je antwoorden in op de lijn

//Waarom staat er let voor de variabelen? ______  let declareert de variabele______ vul je antwoord in op de lijn

function getName(naam){ //In op welke regel in de HTML file wordt deze functie aangeroepen _______17_______ vul je antwoord in op de lijn

    // vul in wat naam is: naam is de ____parameter_______ vul je antwoord in op de lijn, je hebt de eerste letter al gekregen
    // vul in: naam heeft de waarde ______Mustapha______ de waarde noemen we een _____Atribuut_____ vul je antwoord in op de lijn, je hebt de eerste letter al gekregen

    alert(naam); //dit toont een ____melding___ op het scherm met de tekst ____mustapha_____ deze tekst staan op regel ____17___ van de HTML vul je antwoord in op de lijn
}

function hideMe(){ //mag je de naam van de functie veranderen? ______ja je kan ook show bijvoorbeeld_____ vul je antwoord in op de lijn
    document.getElementById("hide").style.display = "none"; 
    document.getElementById("show").style.display = "block"; 
    // wat gebeurd er in deze functie? _________hij zorgt dat als je erop klikt de foto word verbergd__________ en waar wordt deze in je HTML aangeroepen? _____23_______ vul je antwoorden in op de lijn
}

function show(){ //als ik de naam van deze functie verander, waar verander ik deze dan in de HTML _____in regel 25______ vul je antwoord in op de lijn
    document.getElementById("hide").style.display = "block"; // wat doet getElementById? _________zoekt element met id__________ vul je antwoord in op de lijn 
    document.getElementById("show").style.display = "none";     
    // wat gebeurd er in deze functie? _________als je erop klikt laat hij de afbeelding zien__________ vul je antwoord in op de lijn
}

function rekenen(getal){ //In op welke regel in de HTML file wordt deze functie aangeroepen _______32_______ en wanneer wordt deze aangeroepen _____na onclick______ vul je antwoord in op de lijn

    let antwoord = myInt + getal; //waar komt de waarde van myInt vandaan ______helemaal boven bij let myint = 3________ en waar komt de waarde van getal vandaan? ______let myint = 3______ vul je antwoord in op de lijn

    document.querySelector(".som").innerHTML = antwoord;  // wat doet querySelector? _________dan wordt alles wat tussen mijn <body></body> tags staat vervangen door de som__________  Wat is antwoord hier? vul je antwoorden in op de lijn
    
    //wat gebeurt er in deze functie? ________hij doet 5 + 3_____________ vul je antwoord in op de lijn

    //verander de waarde van myInt (zorg dat je een getal gebruikt) en refresh de pagina, wat gebeurd er? __________dan word het 5 plus het andere getal___________ vul je antwoord in op de lijn
    //probeer ook eens de + in een - te veranderen of in een * als waarde van de variabele antwoord (regel 28), zie je wat er gebeurt? 
}

function setColor(element, kleur, size){ //In op welke regel in de HTML file wordt deze functie aangeroepen ____44__________ vul je antwoord in op de lijn

    element.style.color = kleur; //waar komt de waarde van element vandaan _______uit de element P_______ en waar komt de waarde van kleur vandaan? _____uit mijn parameter in mijn html is het orange_______ vul je antwoord in op de lijn
    element.style.fontSize = size; //waar komt de waarde van size vandaan? _____uit de ellement 30 PX_______ vul je antwoord in op de lijn

    //wat gebeurt er in deze functie? ___________hij verandert de element, kleur, en grootte__________ vul je antwoord in op de lijn
}

getName(myStr);
// wat gebeurd er hierboven _____dan krijg je een melding met de naam______ en wanneer gebeurt dat ____ wanneer je er op klikt______ (tip ververs je pagina eens in je brouwser? vul je antwoord in op de lijn.
// verander de waarde van myStr en kijk wat er dan gebeurt (ververs je browser en test het uit) wat gebeurd er? ________dan krijg je een ander antwoord___________ vul je antwoord in op de lijn.