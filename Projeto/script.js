divclicked.addEventListener("DOMContentLoaded", function(){
    function clickMe(){
        var divclicked= document.getElementById("quadrado");
        
        divclicked.addEventListener("click", function(){
            window.location.href="palestra.html";

        });
    }
    clickMe();
});