$(document).ready(function() {  
    //$("span").hide(); // Sumir com todos os span's
    // Aplica evento de blur (perda de foco) em todos os inputs do tipo "type" 
    $("input[type='text']").blur(function(){ 
        // this representa o objeto que disparou o evento, no caso, a caixa de texto que o usuário acabou de sair (seja qual da duas for!)  
        if ($(this).val().length == 0) { 
            // Exibe o elemento seguinte (o span logo depois!) 
            $(this).next().show(); 
        } 
        }); 
    // Aplicado no ganho de foco de todas as caixas de texto, some com o span imediatamente após (Caso sua mensagem esteja sendo exibida!) 
    $("input[type='text']").focus(function() { 
      $(this).next().hide(); 
    });   
  }); 
// this - objeto simples. Elemento DOM, window ou global do Nodejs.
// $this - uma simples variável, pode ter qualquer valor
// $(this) - objeto jQuery com métodos que o jQuery disponibiliza