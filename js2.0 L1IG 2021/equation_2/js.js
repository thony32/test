function delta(x, y, z) {
    return Number(y) * Number(y) - 4 * Number(x) * Number(z);
  }
  $(document).ready(function() {
    $("#resoudre").click(function() {
      var a = $(".input_second.a").val();
      var b = $(".input_second.b").val();
      var c = $(".input_second.c").val();
  
      if (a == 0 && b == 0 && c == 0) {
        $("#resultat_resultat").html("<br/>En mathématique, 0 = 0 est toujours vrai ");
      } 
      else if (a == 0 && b == 0) 
      {
        $("#resultat_resultat").html("<br/>Impossible car " + c + " est différent de zéro");
      }
      else if(a == 0)
      {
          var x4 = (-Number(c)/Number(b)).toFixed(1);
          $("#resultat_resultat").html("<br/>Il s'agit d'une équation du premier degré <br/> x = " + x4);
      }
      else {
        var d = delta(a, b, c);
        var racine_delta, x1, x2, x3;
  
        if (d < 0) {
          $("#resultat_resultat").html(
            "<br/>delta = " +
              d +
              "<br/><br/>Comme le discriminant(delta) est négatif, alors l'équation ne possède pas de solution réelle"
          );
        } else {
          racine_delta = Math.sqrt(d);
          if (d == 0) {
            x3 = (-Number(b) / (2 * Number(a))).toFixed(1);
            $("#resultat_resultat").html(
              "<br/>delta =" +
                d +
                "<br/>Comme le discriminant est égal à zéro, alors l'équation admet deux solutions réelles confondues : <br/> x<sub>1</sub> = x<sub>2</sub> = " +
                x3
            );
          } else {
            x1 = ((-Number(b) - racine_delta) / (2 *Number(a))).toFixed(20);
            x2 = ((-Number(b) + racine_delta) / (2 *Number(a))).toFixed(20);
            $("#resultat_resultat").html("delta = " + d + "<br/>Comme le discriminant(delta) est strictement positif, alors l'équation admet deux solutions réelles distinctes : <br/><br/>x<sub>1</sub> = " + x1 + " <br/>x<sub>2</sub> = " + x2);
          }
        }
      }
    });
    $("#effacer").click(function(){ 
      $(".input_second").val("");
      $("#resultat_resultat").html("");
  });
  });
  