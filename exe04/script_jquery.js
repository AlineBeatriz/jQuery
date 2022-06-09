//exercício 4: efeito fade - esconde o elemento de varias formas.
     $(function (){
         $('.azul').click(function (){
             $('p').css("color", "blue");
         });
         //ou...
         $('.vermelho').click(function (){
             $('p').css("color", "red");
             $('p').fadeOut('fast'); //fadeOut() - esconde o elemento suavimente.
             $('p').delay(3000); //pausa de 3 segundos no Js
             $('p').fadeIn('fast'); // faz retorna o elemento desaparecido.
         });
     });