fetch('header.html')
.then(response => response.text())
.then(html=> {const localDoComponente = document.getElementById('local-do-componente');
 localDoComponente.innerHTML =html;
});