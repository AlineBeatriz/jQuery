//exercicio 3: ao clicar nos botões as cores do texto se alteram.
     $(function (){
         $('.azul').click(function (){
             $('p').css("color", "blue");
         });
         //ou...
         $('.vermelho').click(function (){
             $('p').css("color", "red");
         });
     });