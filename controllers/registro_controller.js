import { clientService } from "../Service/client-service.js";

const formulario = document.querySelector("[data-form]");
formulario.addEventListener("submit",(evento)=>{
    evento.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value;
    const email = document.querySelector("[data-email]").value;
    clientService.crearCliente(nombre,email).then(()=>{
        window.location.href ="/screens/registro_completado.html"  //metodo para cambiar la ventana
    }).catch((err)=>console.log(err));
})