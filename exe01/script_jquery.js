// $(seletor).ação();
//(document).ready -  verifica se o documento está pronto.
//(function (){ - se o documento estiver pronto ele vai rodar uma função e executar o que vc quer.
    //$('button') - seletor, o que vc quer.
    //.click - a ação para ser executada.

    $(document).ready(function (){ 
        $('button').click(function (){
            $('h1').hide();
        });
    });