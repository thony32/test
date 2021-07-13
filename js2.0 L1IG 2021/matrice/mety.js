
var mess1 = document.getElementById("resultat_resultat");
var bouton = document.getElementById("resoudre"); 
bouton.addEventListener("click", resultat);


function resultat(){
    var a1 = document.getElementById("a1").value;
    var b1 = document.getElementById("b1").value;
    var c1 = document.getElementById("c1").value;
    var d1 = document.getElementById("d1").value;
    var a2 = document.getElementById("a2").value;
    var b2 = document.getElementById("b2").value;
    var c2 = document.getElementById("c2").value;
    var d2 = document.getElementById("d2").value;
    var a3 = document.getElementById("a3").value;
    var b3 = document.getElementById("b3").value;
    var c3 = document.getElementById("c3").value;
    var d3 = document.getElementById("d3").value;

    var deltaP = a1*((b2*c3)-(c2*b3))-b1*((a2*c3)-(c2*a3))+c1*((a2*b3)-(b2*a3));
    var deltaX = d1*((b2*c3)-(b3*c2))-b1*((d2*c3)-(d3*c2))+c1*((d2*b3)-(d3*b2));
    var deltaY = a1*((d2*c3)-(d3*c2))-d1*((a2*c3)-(a3*c2))+c1*((a2*d3)-(a3*d2));
    var deltaZ = a1*((b2*d3)-(b3*d2))-b1*((a2*d3)-(a3*d2))+d1*((a2*b3)-(a3*b2));
   
    
if ( a1 == ""  || b1== "" || c1 == "" || d1 == "" || a2 == "" || b2 == "" || c2 == "" || d2 == "" || a3 == "" || b3 == "" || c3 == "" || d3 == "" )
{
    alert("Veuillez insérer des nombres sur toutes les cases");
}
else
{

    if (deltaP == 0){  
        mess1.innerHTML="Delta = 0 , ce systeme est irrésolvable par le méthode de cramer<br> Alors ce systeme a une infinité de solution ou il n' adhére pas de solution"
    }
    else{
   

        var X = (deltaX/deltaP).toPrecision(2);
        var Y = (deltaY/deltaP).toPrecision(2);
        var Z = (deltaZ/deltaP).toPrecision(2);
        mess1.innerHTML="Les solutions sont : <br> X = "+ X +"<br>Y = "+ Y +"<br>Z = "+ Z;
      
    }
}
}
var bouton2= document.getElementById("effacer");
bouton2.addEventListener("click", actualiser);

function actualiser(){
if(confirm("Êtes-vous sûr de vouloir réinitialiser les valeurs?"))
{
    reinitialiser();
}
}

function reinitialiser(){
    document.getElementById("a1").value= '';
    document.getElementById("b1").value= '';
    document.getElementById("c1").value= '';
    document.getElementById("d1").value= '';
    document.getElementById("a2").value= '';
    document.getElementById("b2").value= '';
    document.getElementById("c2").value= '';
    document.getElementById("d2").value= '';
    document.getElementById("a3").value= '';
    document.getElementById("b3").value= '';
    document.getElementById("c3").value= '';
    document.getElementById("d3").value= '';
    mess1.innerHTML="";
}