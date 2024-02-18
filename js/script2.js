const imagenspalestra=[
   'img/Fotos palestra 29.08/img_1.jpg',
   'img/Fotos palestra 29.08/img_2.jpg',
   'img/Fotos palestra 29.08/img_3.jpg',
   'img/Fotos palestra 29.08/img_4.jpg',
   'img/Fotos palestra 29.08/img_5.jpg',
   'img/Fotos palestra 29.08/img_6.jpg'
 ];

const imagenscoleta=[
   'img/Atividade coleta seletiva 14.09/img1.jpg',
   'img/Atividade coleta seletiva 14.09/img2.jpg',
   'img/Atividade coleta seletiva 14.09/img3.jpg',
   'img/Atividade coleta seletiva 14.09/img4.jpg',
   'img/Atividade coleta seletiva 14.09/img5.jpg',
   'img/Atividade coleta seletiva 14.09/img6.jpg'
];

const imagensatvdesenho=[
  'img/Atividade de desenho da Lagoa 26.09/img,1.jpeg',
  'img/Atividade de desenho da Lagoa 26.09/img,2.jpeg',
  'img/Atividade de desenho da Lagoa 26.09/img,3.jpeg',
  'img/Atividade de desenho da Lagoa 26.09/img,4.jpeg',
  'img/Atividade de desenho da Lagoa 26.09/img,5.jpeg',
  'img/Atividade de desenho da Lagoa 26.09/img,21.jpeg'
];

const imagensatvsapinho1=[
'img/Atividade do Sapinho 10.09/img;1.jpeg',
'img/Atividade do Sapinho 10.09/img;2.jpeg',
'img/Atividade do Sapinho 10.09/img;3.jpeg',
'img/Atividade do Sapinho 10.09/img;5.jpeg',
'img/Atividade do Sapinho 10.09/img;6.jpeg',


];

const imagensvisitaLagoa=[

];

const imagensatvsapinho2=[

];



function createGaleries(elemento){

 if(elemento !==null && elemento==='palestra'){
    for(let i=0; i<imagenspalestra.length; i++){
      document.getElementById('divisaoPalestra').innerHTML +=`
      
      <div class="quadrado">  
      <div class="col-lg-14 mb-3">
      <a href="${imagenspalestra[i]}" data-toggle="lightbox" data-gallery="mygallery">
      <img class="fotos" src="${imagenspalestra[i]}" class="img-fluid">
      
      </a>
      </div>
      </div>
      `;
    }

    document.querySelectorAll('[data-toggle="lightbox"]').forEach((lightbox, index => {
      lightbox.addEventListener('shown.bs.modal', function(){
         setTimeout(()=>{
            const carousel= lightbox.querySelectorAll('.carousel');
            carousel && $(carousel).carousel(index);
         }, 10000000*index)
        });
       })
      );

 }
      

 if(elemento !==null && elemento==='coleta'){
    for(let i=0; i<imagenscoleta.length; i++){
      document.getElementById('divisaoColeta').innerHTML +=`
      <div class="quadrado">
      <div class="col-lg-14 mb-3">
      <a href="${imagenscoleta[i]} data-toggle="lightbox" data-lightbox="mygalery">
      
      <img class="fotos" src="${imagenscoleta[i]}" class="img-fluid">
      <a>
      </div>
      </div>
      
     `;
       
     
    }

 }

 if(elemento !==null && elemento==='atvLagoa'){
   for(let i=0; i<imagensatvdesenho.length;i++){
      document.getElementById('divisaoatvLagoa').innerHTML +=`
      <div class="quadrado">
      <a href="${imagensatvdesenho[i]}" data-toggle="lightbox" data-gallery="mygallery">
      <img class="fotos" src="${imagensatvdesenho[i]}" class="img-fluid">
      </a>
      </div>
      </div>
      `;
   }
 }



if(elemento != null && elemento==='atvSapinho1'){
   for(let i=0; i<imagensatvsapinho1.length; i++){
   document.getElementById('divisaoatvSapinho1').innerHTML +=`
   <div class= "quadrado">
   <a href="${imagensatvsapinho1[i]}" data-toggle="lightbox" data-gallery="mygallery">
   <img class="fotos" src="${imagensatvsapinho1[i]}" class="img-fluid">
   </a>
   </div>
   </div>
   `
   }
}


if(elemento!= null && elemento==='visitaLagoa'){
   for(let i=0; i<imagensvisitaLagoa.length; i++){
      document.getElementById('divisaovisitaLagoa').innerHTML +=`
      <div class= "quadrado">
      <a href="${imagensvisitaLagoa[i]}" data-toggle="lightbox" data-gallery="mygallery">
      <img class="fotos" src="${imagensvisitaLagoa[i]}" class="img-fluid">
      </a>
      </div>
      </div>
      `
   }
   
}






}