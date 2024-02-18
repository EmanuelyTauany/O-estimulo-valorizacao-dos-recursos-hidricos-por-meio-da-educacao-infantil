var slide = document.querySelector('.slideshow');
var time= 2000;
var count =0;

var imagenspalestra=[
'img/Fotos palestra 29.08/img_1.jpg',
'img/Fotos palestra 29.08/img_2.jpg',
'img/Fotos palestra 29.08/img_4.jpg'
];

function moveSlideShow(){
    
 
    slide.src= imagenspalestra[count];
 
    if(count<imagenspalestra.length-1){
      count++;
 
    }else{
       count=0;
    }
 
    setTimeout("moveSlideShow()", time);
 
 }

 window.onload= moveSlideShow;
