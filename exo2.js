function Echange(array) {
    let nombre = [0, 1, 0];

    for (let i = 0; i < nombre.length; i++) {
        const element = nombre[i];
        if (nombre == 0 ) {
            
        return nombre.slice(element);
        }else{
          return nombre;
        }
    }
}

function Ranger(array) {
    let nombre = [0, 1, 0, 0, 1, 0];
    return array.map(nombre);
}
console.log(Echange());
console.log(Ranger());
