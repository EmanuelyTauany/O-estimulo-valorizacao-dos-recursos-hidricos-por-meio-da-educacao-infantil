const imagenspalestra=[
    'img/Fotos palestra 29.08/img_1.jpg',
    'img/Fotos palestra 29.08/img_2.jpg',
    'img/Fotos palestra 29.08/img_3.jpg',
    'img/Fotos palestra 29.08/img_4.jpg',
    'img/Fotos palestra 29.08/img_5.jpg',
    'img/Fotos palestra 29.08/img_6.jpg'
  ]
 
 const imagenscoleta=[
    'img/Atividade coleta seletiva 14.09/img1.jpg',
    'img/Atividade coleta seletiva 14.09/img2.jpg',
    'img/Atividade coleta seletiva 14.09/img3.jpg',
    'img/Atividade coleta seletiva 14.09/img4.jpg',
    'img/Atividade coleta seletiva 14.09/img5.jpg',
    'img/Atividade coleta seletiva 14.09/img6.jpg'
 ]
 
 const imagensatvdesenho=[
   'img/Atividade de desenho da Lagoa 26.09/img,1.jpeg',
   'img/Atividade de desenho da Lagoa 26.09/img,2.jpeg',
   'img/Atividade de desenho da Lagoa 26.09/img,3.jpeg',
   'img/Atividade de desenho da Lagoa 26.09/img,4.jpeg',
   'img/Atividade de desenho da Lagoa 26.09/img,5.jpeg',
   'img/Atividade de desenho da Lagoa 26.09/img,21.jpeg'
 ]
 function createGaleries(elemento){
 
  if(elemento !==null && elemento==='palestra'){
     for(let i=0; i<imagenspalestra.length; i++){
       document.write(`<a href="Pages/palestra.html">
        <div class="quadrado">
       <img class="fotos" src="${imagenspalestra[i]}" onclick="openLightBox('${imagenspalestra[i]}')">
       </div>
        </a>`);
     }
  }
 
  if(elemento !==null && elemento==='coleta'){
     for(let i=0; i<imagenscoleta.length; i++){
       document.write(`
       <div class="quadrado">
       <img class="fotos" src="${imagenscoleta[i]}" onclick="openLightBox('${imagenscoleta[i]}')">
       </div>`);  
     }
  }
 
  if(elemento !==null && elemento==='atvLagoa'){
    for(let i=0; i<imagensatvdesenho.length;i++){
       document.write(`<a href="Pages/atvLagoa.html">
       <div class="quadrado">
       <img class="fotos" src="${imagensatvdesenho[i]}">
       </div>
       </a>`);
    }
  }
 
 }
 
 function openLightbox(elemento){
    const lightbox = document.getElementById('lightbox');
    const lightboxImage= document.getElementById('lightboxImage');
   
    lightbox.style.display('flex');
 
    if(elemento!== null && elemento==='palestra'){
       for(let i=0;i<imagenspalestra.lenght; i++){
          lightboxImage.src= imagenspalestra[i];
 
       }
    }
 
    if(elemento!== null && elemento==='coleta'){
       for(let i=0;i<imagenscoleta.lenght;i++){
          lightboxImage.src= imagenscoleta[i];
       }
    }
 
    if(elemento!==null && elemento==='atvLagoa'){
       for(let i=0;i<imagensatvdesenho.lenght;i++){
          lightboxImage.src= imagensatvdesenho[i];
       }
    }
   
 }
 
 function closeLightBox(){
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display='none'; 
 }