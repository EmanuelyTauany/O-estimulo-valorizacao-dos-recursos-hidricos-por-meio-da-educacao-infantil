function createHeader(){

document.write(`<div class="sessao">
     
<br>
<h1 id="nomesite">Preservação dos Recursos Hídricos através da Educação Infantil</h1>
<img src="img/polvinho.png" height="200">

</div>


<div class="gotinhas">
<a class="got" href="sobrenos.html">  
<img src="img/gotinhas.png" width="60" class="imggot">
<br>
Sobre
</a>
<br>

<a class="got" href="fotos.html" onclick="gotOnClick('img-fotosevideos')">
<img src="img/gotinhas.png" width="60" class="imggot" id="img-fotosevideos">
<br>
Fotos
</a>

<a class="got" href="attrealizadas.html" onclick="gotOnClick('img-attrealizadas')">

<img src="img/gotinhas.png" width="60" class="imggot" id="img-attrealizadas">
<br>
Atividades
</a>

<a class="got" href="galeriadevideos.html" class="gotOnClick('img-galeriadevideos')">
<img src="img/gotinhas.png" width="60" class="imggot" id="img-galeriadevideos">
<br>
Vídeos
</a>

<a class="got" href="oficinasdedesenho.html" class="gotOnClick('img-oficinadedesenho')">

<img src="img/gotinhas.png" width="60" class="imggot" id="img-oficinadedesenho">
<br>

Desenhos

</a>

<a class="got" href="depoimentos.html" class="gotOnClick('img-depoimentos')">

<img src="img/gotinhas.png" width="60" class="imggot" id="img-depoimentos">
<br>
Depoimentos
</a>

</div>


<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>`);


}

function createFooter(){
    document.write(`<footer>

    <img class="footer-imgs"src="img/marcahorizontalpng2.png" width="300">
    <img class="footer-imgs" src="img/brasao-sem-fundo.png" width="80">
    
    </footer>`);
}

function gotOnClick(linkId){
   const gotinhas = document.querySelectorAll('.imggot').forEach(function(imggot){
    imggot.classList.remove('selected');
   });

   document.getElementById(linkId).classList.add('selected');
}