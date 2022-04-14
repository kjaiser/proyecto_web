'use strict'

$(document).ready(function(){
    console.log("novedades");
    var elementos =['rombo', 'circulo', 'cuadrado', 'rectangulo']

    const aleatorio = elementos[Math.floor(Math.random() * elementos.length)];

    console.log("cargado");
    $('#contenedor2').append('<center><p> Arrastra el ' + aleatorio + ' aqui:</p></center>');
// ----hacer los elementos moviles-----

    $(".movil").draggable();

// ------------------------------------
    
    $("#contenedor2").droppable({
    drop: function(ev, ui){
        var figura = ui.draggable.attr("id");
        console.log(figura);
        if(figura == aleatorio){
            alert("muy bien");
            location.reload();
            }else
                alert("error eso no es un "+aleatorio);    
        }
    });

  

});