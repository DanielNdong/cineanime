const hamActive = document.getElementById("hamActive");
const navigationWrapper = document.getElementById("naviWrapper");
const body = document.getElementById("body");

var state = "none";
hamActive.addEventListener("click",function(){
 /*    navigationWrapper.classList.toggle("activeWrapper"); */

 /*  Ocultamos y  mostramos el menu de navegacion ---> displays: block and none */
 if(state === "none"){
     navigationWrapper.style.display =`block`;
     state = "block"
      /* Para que no haya scroll al mostrar el menu de navegacion hacemos:
    *Darle al body al height de 100vh para que mida lo mismo que la pantalla.
    *Luego le damos la propiedad overflow: hidden para que todos los elementos hijos no se desborden. 
    */
    body.style.height ="100vh"
    body.style.overflow ="hidden"
    }else{
        navigationWrapper.style.display =`none`;
        state = "none"
         /* Le quitamos el overflow:hidden */
        body.style.height ="auto"
        body.style.overflow ="scroll"
 }

})