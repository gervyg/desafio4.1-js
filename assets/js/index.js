let form = document.getElementById("formulario")

form.addEventListener("submit", function(event){
    event.preventDefault()
    limpiarErrores()
    let textnombre = document.querySelector(".textnombre").value
    let textasunto = document.querySelector(".textasunto").value
    let textmensaje = document.querySelector(".textmensaje").value

    let resultado = validar(textnombre, textasunto, textmensaje)

    if(resultado == true){
        exito();
            }
})

function limpiarErrores(){
document.querySelector(".resultado").innerHTML = "";
document.querySelector(".errorNombre").innerHTML = "";
document.querySelector(".errorAsunto").innerHTML = "";
document.querySelector(".errorMensaje").innerHTML = "";
} 
    
function exito() {
    document.querySelector(".resultado").innerHTML = "Mensaje Enviado con Exito"
}

function validar(nombre, asunto, mensaje) {
    let pasamoslavalidacion = true;
    let validacionLetra = /^[A-Z ]+$/i;

    if(validacionLetra.test(nombre) == false){
        document.querySelector(".errorNombre").innerHTML = "Ingrese un Nombre Valido"
        pasamoslavalidacion = false
    }

    
    if(validacionLetra.test(asunto) == false){
        document.querySelector(".errorAsunto").innerHTML = "Ingrese un Asunto Valido"
        pasamoslavalidacion = false
    }
    
   
    if(validacionLetra.test(mensaje) == false){
        document.querySelector(".errorMensaje").innerHTML = "Ingrese un Mensaje Valido"
        pasamoslavalidacion = false
    }
    return pasamoslavalidacion;









    
}
