//Forma mais simples:
     $(function(){ //verifica se o documento já está carregado e chama a função.
         $('button').click(function(){
            $('h1').hide(); //.hide()- oculta o elemento atual, o h1.
            //usando CSS com jQuery, para alterar a cor do botão quando for clicado.
             $('#unico').css({backgroundColor: 'red'});
        });
     });