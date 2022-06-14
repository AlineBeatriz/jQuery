$(document).ready(function() { 
    $("#quadrado").mouseover(function(){ //mouseover - passe o mouse por cima
        $("#quadrado").animate({width: "200px", height: "200px"}); //largura(width), altura(height) da div
        //.animate()método nos permite criar efeitos de animação em qualquer propriedade CSS  
    }); 
});  