$(document).ready(function() { 
    //quadrado começa invisível 
    $(".quadrado").hide(); 
    //quando o mouse passar pelo alvo, mostra quadrado 
    $(".alvo").mouseover(function(){ 
      $(".quadrado").slideToggle("slow"); //deslizar para baixo e para cima, com alternância.
    }); 
    //quando o mouse sair do alvo, some com o quadrado 
    $(".alvo").mouseout(function(){ 
      $(".quadrado").slideToggle("slow"); //slideToggle("slow"); - slide Alternar ("lento");
    }); 
  }); 
//slideDown(): desliza para baixo.
//slideUp(): desliza para cima.
//slideToggle():deslizar para baixo e para cima, com alternância.
  