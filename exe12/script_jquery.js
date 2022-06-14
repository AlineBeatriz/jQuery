$(document).ready(function() { 
    //quadrado começa invisível 
    $(".quadrado").hide(); //oculta
    //quando o mouse passar pelo alvo, mostra quadrado 
    $(".alvo").mouseover(function(){ //passe o mouse por cima
      $(".quadrado").show(); //mostra
    }); 
    //quando o mouse sair do alvo, some com o quadrado 
    $(".alvo").mouseout(function(){ //mouse para fora
      $(".quadrado").hide(); 
    }); 
  }); 
  