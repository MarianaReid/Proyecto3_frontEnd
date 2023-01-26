export const cantidadCaracteres = (input, min, max) => {
    if (input.length >= min && input.length <= max){
        return true;
    }else{
        return false;
    }
}

export function validarClave (input) {
let patron = /^(?=.[a-z])(?=.*[A-Z])(?=.*[$@$!%*?&#;$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$/;
if (patron.test(input)){
    return true;
}else{
    return false;
}
}

export function validarEmail (input){
    let patron = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (patron.test(input)){
        return true;
    }else{
        return false;
    }
}
