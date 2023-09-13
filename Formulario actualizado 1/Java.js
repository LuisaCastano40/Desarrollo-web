function darkMode(){
    const a= document.querySelector(".body-1").className="body-2";
    const b= document.querySelector(".contenedor-1").className="contenedor-1-2";
    const c= document.querySelector(".whatsapp").className="whatsapp-2";
    console.log("dark Mode");
}

function normalMode(){
    const a= document.querySelector(".body-2").className="body-1";
    const b= document.querySelector(".contenedor-1-2").className="contenedor-1";
    const c= document.querySelector(".whatsapp-2").className="whatsapp";
    console.log("normal Mode");
}

const button = document.querySelector(".btn");
console.log(button);

// button.addEventListener("click",function(evento) {
//     evento.preventDefault();
//     console.log("crear tareaaaaa");
//     const input = document.querySelector("textarea");
//     console.log(input.value);
// })

//Para código más limpio
const createTask = (evento) => {
    evento.preventDefault();
    console.log("crear tareaaaaa");
    const input = document.querySelector("textarea");
    console.log(input.value);
}
button.addEventListener("click", createTask);
window.alert("Hola mundo");
