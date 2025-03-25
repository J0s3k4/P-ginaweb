//El "mousemove" se activa cuando el usuario mueve el ratón
//de esta forma se ejecuta el event que hemos añadido
document.addEventListener("mousemove", function(event) {
    //event.clientX coge el movimiento horizontal
    //la divison Width divide el ancho total del navegador
    let x = event.clientX / window.innerWidth;//ancho
    //event.clientY coge el modimiento vertival
    //Esta divide la altura total de la ventada
    let y = event.clientY / window.innerHeight;//alto
//X horitzontal-->así si el ratón estla a la izquierda es x=0 y si está a la derecha x=1
//y lo mismo con Y

//cogemos el backgrund-position del body que controla CSS

    document.body.style.backgroundPosition = `${x * 50}% ${y * 50}%`;
});
/*
genera porcentajes para mover la imagen:
el  valor X "${x * 50}%"--> si x = 0.5 la posición horizontal es 25%
el valor Y "${y * 50}%" --> si y =====
Básicamente, a medida que el usuario mueve el ratón cambian los valores
y la imagen de desplaza
*/