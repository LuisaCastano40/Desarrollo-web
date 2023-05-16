function darkMode(){
    // let a = document.getElementsByTagName("body"); //selecciono al bodý porque me contiene todo
    // a[0].style.backgroundColor = "black";
    // a[0].style.color="white";
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