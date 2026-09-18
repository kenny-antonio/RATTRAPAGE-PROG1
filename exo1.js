function NegatifPositif(array ) {

    let chiffre = [3, -1, 0, 4, -2, 5, -3];

    for (let i = 0; i < chiffre.length; i++) {
        const element  = chiffre[i++];
        if (chiffre <= 0) {
            return element.replace(chiffre);            
        }else{
          return element;
        }
    }
    
}

 console.log(NegatifPositif());