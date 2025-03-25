//se ejecuta cuando el html de la página está cargado
document.addEventListener("DOMContentLoaded", function () {
    // abrimos funcion y cogemos el id de html dark mode toggle
    const toggleBtn = document.getElementById("dark-mode-toggle");
    //cuando hacemos click en el boton se ejecutará la funcion
    toggleBtn.addEventListener("click", function () {
        //agrega el modo oscuro al body
        document.body.classList.toggle("dark-mode");
    });
});


//espera a que el DOM esté cargado para ejecutar el script
document.addEventListener("DOMContentLoaded", function () {
    //el query devuelve la lista de elementos encontrados para ejecutarlos
    //empezamos funcion buscando en html los elementos que tengan content-box
    const sections = document.querySelectorAll(".content-box");
    //creamos un observador que detecte los elementos que están a la vista del usuario
    //hacemos uso de la API "intersection..."" que detecta si un elemento es visible en la pantalla
    const observer = new IntersectionObserver(entries => {
        /*entries recorre los elementos observados
        si un elemento está visible en pantalla se le agrega "visible"
        */
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
        //aclaramos que para que un elemento sea visible esté al menos 50% visible
    }, { threshold: 0.5 });
    //recorre cada elemento de .content-box y lo "observa"
    //esto activa el código del "intersection.." cuando el elemento entra en la vista del ususario
    sections.forEach(section => {
        observer.observe(section);
    });
});




/*Funcion que detecta los clic del usuario, si este NO hizo click en .dropbtn (que es el boton)
busca los menús abiertos y elimina la clase "show" de ellos, es decir, los cierra */
function toggleDropdown() {
    document.getElementById("dropdownMenu").classList.toggle("show");
}

// Cerrar el menú si el usuario hace clic fuera
//Vamos a definir una función que se active cuando el usuario haga "clic"
window.onclick = function(event) {
    //si el click NO fue en el botón del menú desplegable...
    if (!event.target.matches('.dropbtn')) {
        //...ejecutamos el código. Para ello cogemos el nombre del "class"
        let dropdowns = document.getElementsByClassName("dropdown-content");
        //iniciamos un bucle que recorra los menús desplegables (por si hubiera más de uno)
        for (let i = 0; i < dropdowns.length; i++) {
            //guardamos los elementos desplegables
            let openDropdown = dropdowns[i];
            //si abre el menú (dropdown) se queda en show (visible)
            if (openDropdown.classList.contains("show")) {
            //si el menú está abierto(show) se le quita la clase, cerrándolo.
                openDropdown.classList.remove("show");
            }
        }
    }
};

