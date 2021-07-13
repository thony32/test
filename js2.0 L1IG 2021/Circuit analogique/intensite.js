var mess1 = document.getElementById("resultat_resultat");
//var mess2 = document.getElementById("mess2");
//var div = document.getElementById("div5");

var bouton= document.getElementById("resoudre");
bouton.addEventListener("click", resultat);

function resultat(){
    var U =  document.getElementById("U").value;
    var R1 = document.getElementById("R1").value;
    var R2 = document.getElementById("R2").value;
    var R3 = document.getElementById("R3").value;

    //div.style.animation="solution 15s infinite ";

   var deltap = (R3*R2)+(R3*R1)+(R2*R1);
  
if ( U == "" || R1 == "" || R2 == "" || R3 == "")
{
    alert("Veuillez entrer les nombres dans toutes les cases");
}
else{   
   if ( R1 < 0 || R2 < 0 || R3 < 0){
       //message.innerHTML="Il n'existe pas de résistance négative";
       mess1.innerHTML="Il n'existe pas de résistance négative <br> Veuillez ressaisir les valeurs";
   }
   else if ( U == 0)
   {
       //message.innerHTML="Solution";
       mess1.innerHTML="I=0 car U=0 or U=RI."
   }
   else if (deltap == 0){
       //message.innerHTML="Solution";
       mess1.innerHTML="Impossible d'obtenir les solutions sans plus de donnés car le discriminant principal = 0";
   }
   else {
    var deltaI1 = (R3*U)+(R2*U);
    var deltaI2 = (R3*U);
    var deltaI3 = (R2*U);
    var I1 = (deltaI1/deltap).toPrecision(2);
    var I2 = (deltaI2/deltap).toPrecision(2);
    var I3 = (deltaI3/deltap).toPrecision(2);
    //message.innerHTML="Solution";
    mess1.innerHTML="I1="+I1+"A<br> I2="+I2+"A<br>I3="+I3+"A";
   }
}
   
   var z = setInterval( function interval(){ window.scrollBy(0,2);},20);
   setTimeout( function arret(){ 
      clearInterval(z);
   }, 4000);

   
}
var bouton2= document.getElementById("effacer");
bouton2.addEventListener("click", actualiser);

function actualiser(){
if(confirm("Êtes-vous sûres de vouloir réinitialiser les valeurs?"))
{
    reinitialiser();
}
}

function reinitialiser(){
    document.getElementById("U").value= '';
    document.getElementById("R1").value= '';
    document.getElementById("R2").value= '';
    document.getElementById("R3").value= '';
    //message.innerHTML= "";
    mess1.innerHTML= "";
    //mess2.innerHTML= "";
}
