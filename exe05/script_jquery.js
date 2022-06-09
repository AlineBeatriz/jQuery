//exercício 5: Gravando mensagem.
     $(function (){
         $('.azul').click(function (){
             $('p').css("color", "blue");
         });

         $('.vermelho').click(function (){
             $('p').css("color", "red");
            $('.mensagem').text("Cor alterada."); //gravou a mensagem
            $('.mensagem').css('color', 'red'); //alterou a cor da mensagem
            $('.mensagem').css('border', '1px solid red'); //adicionou uma borda vermelha na mensagem.
            $('.mensagem').delay(3000); //pausa de 3segundos no Js
            $('.mensagem').fadeOut('fast'); //desaparecer lentamente
         });
     });

//Encadeamento em bloco:
    // $(function (){
    //     $('.azul').click(function (){
    //         $('p').css("color", "blue");
    //     });

    //     $('.vermelho').click(function (){
    //         $('p').css("color", "red");
    //     $('.mensagem')
    //         .text("Cor alterada.")
    //         .css('color', 'red')
    //         .css('border', '1px solid red')
    //         .delay(3000)
    //         .fadeOut('fast'); 
    //     });
    // });
//OU... $('.mensagem').text("Cor alterada.").css('color', 'red').css('border', '1px solid red').delay(3000).fadeOut('fast'); });