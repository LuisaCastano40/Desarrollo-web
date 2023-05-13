

function mayorArray(arr){

    //revisa si está vacío el arreglo
    if(arr.length == 0){
        return null;
    }
    //revisa si sólo hay un elemento en el arreglo
    else if(arr.length == 1){
        return arr[0];
    }
    else{

    //declaración de variables
    let i = 0, mayornum = 0, impares = 0;
    
    //imprimir datos  
        while (i<arr.length){
            console.log("dato " + arr[i]+" Posición "+i);
            i++;
        }
    //reiniciar auxiliar
        i=0;
    
    //contar impares
        do {
            if (arr[i]%2 != 0){
                impares ++;
            } 
            i++;
        }while (i<arr.length);

    // Número más grande   
        for (let j=0; j<arr.length; j++){
            if(arr[j]>mayornum){
                mayornum= arr[j];
            }
        }
    // Salida    
        return "Número mayor: "+mayornum + " Cantidad de impares: "+impares;
    }
}

