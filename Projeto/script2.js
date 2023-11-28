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

function createGaleries(elemento){

 if(elemento !==null && elemento==='palestra'){
    for(let i=0; i<imagenspalestra.length; i++){
      document.getElementById('divisaoPalestra').innerHTML +=`
       <div class="quadrado">
      <img class="fotos" src="${imagenspalestra[i]}" onclick="openLightBox('${imagenspalestra[i]}')">
      </div>
      `;
    }
 }

 if(elemento !==null && elemento==='coleta'){
    for(let i=0; i<imagenscoleta.length; i++){
      document.getElementById('divisaoColeta').innerHTML +=`
      <a href="${imagenscoleta[i]} data-lightbox="mygalery">
      <div class="quadrado">
      <img class="fotos" src="${imagenscoleta[i]}" onclick="openLightBox('${imagenscoleta[i]}')">
      </div>
      <a>
     `;
        
    }
 }

 if(elemento !==null && elemento==='atvLagoa'){
   for(let i=0; i<imagensatvdesenho.length;i++){
      document.getElementById('divisaoatvLagoa').innerHTML +=`
      <div class="quadrado">
      <img class="fotos" src="${imagensatvdesenho[i]}">
      </div>
      `;
   }
 }

}
/*
function openLightbox(elemento, img){
   const lightbox = document.getElementById('lightbox');
   const lightboxImage= document.getElementById('lightboxImage');
   const close= document.getElementsByClassName('close');
  
   lightbox.style.display='flex';

   /*if(elemento!==null && elemento==='palestra'){
      for(let i=0;i<imagenspalestra.length; i++){
         lightboxImage.src= imagenspalestra[i];
         break;
      }
   }

   if(elemento!==null && elemento==='coleta'){
      for(let i=0;i<imagenscoleta.length;i++){
         lightboxImage.src= imagenscoleta[i];
         break;
      }
   }

   if(elemento!==null && elemento==='atvLagoa'){
      for(let i=0;i<imagensatvdesenho.length;i++){
         lightboxImage.src= imagensatvdesenho[i];
         break;
      }
   }
 
}

function closeLightBox(){
   const lightbox = document.getElementById('lightbox');
   lightbox.style.display='none'; 
}
 */