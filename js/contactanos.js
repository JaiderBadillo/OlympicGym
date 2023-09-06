const evento = document.getElementById('send')
const enviarFormulario =() => {
    let nombre = document.getElementById('nombre').value;
    let plan = document.getElementById('plan').value;
    let mensaje = document.getElementById('mensaje').value;
    let numero= 573227411231;
var win= window.open(`https://wa.me/${numero}?text=Hola%20mi%20nombre%20es%20${nombre}
%20mi%20plan%20es%20${plan}, Asunto:%20${mensaje}`,'_blank');       
}
evento.addEventListener('click', enviarFormulario)
