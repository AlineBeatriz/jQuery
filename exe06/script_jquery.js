//exercício 6: Declaração múltipla CSS. .css({ })
    $(function (){
        $('.azul').click(function (){
            $('p').css("color", "blue");
        });

        $('.vermelho').click(function (){
            $('p').css("color", "red");
        $('.mensagem')
            .text("Cor alterada.")
            .css({color:'red', border: '1px solid red', backgroundColor: '#F08080'})
            .delay(3000)
            .fadeOut('fast'); 
        });
    });