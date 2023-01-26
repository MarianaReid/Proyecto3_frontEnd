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
