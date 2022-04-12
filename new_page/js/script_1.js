$(document).ready(function(){


// ---------- Array de botones -------------    
var botones = [
    {
        clase : ".boton_nav", 
        background1 : "#333",
        background2 : "rgb(108, 107, 107)",
        cursor : "pointer"
    },
    {
        clase : ".boton", 
        background1 : "aquamarine",
        background2 : "gray",
        cursor : "pointer"
    }
]

// ------------------------------------------


    console.log(botones[0].clase);

    console.log("listo");

    function bhover(boton,index){
        
        function primero(){
            $(this).css("background",boton[index].background1);
        }
    
        function segundo(){
            $(this).css("background",boton[index].background2);
        }
        $(boton[index].clase).hover(segundo, primero);
        console.log(boton[index]);
    }
      
    bhover(botones, 0);
    bhover(botones, 1);

});