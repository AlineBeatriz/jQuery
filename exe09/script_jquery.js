//exercício 8: Adicionando e removendo classe.
    $(function (){
        $('.azul').click(function (){
            $('p').css("color", "blue");
        });

        $('.vermelho').click(function (){
            $('p').css("color", "red");
        $('.mensagem')
            .text("Cor alterada.")
            .css({color:'red', border: '1px solid red'})
            .delay(3000)
            .fadeOut('fast') 
            .addClass('green'); //para adicionar uma classe

            $('button').removeClass('red'); //para remover uma classe. 
        });
    });

