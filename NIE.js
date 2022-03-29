function f(form)
{
        var cadena = form.valor.value;
        let sub = cadena.substring(0,8);
        let final = cadena.substring(8,9);
            //alert("Está bien "+ form.valor.value)
            //alert('la longuitud de la cadena es: ' +cadena.length)
            if(cadena.length == 9){
                
                if(isNaN(sub*9)){
                    alert('Los 8 primeros elementos no son números');
                    return false
                }else{
                    if(!isNaN(validar(sub,final))){
                        return true
                    }else{
                        alert('no es una letra');
                        return false
                    }
                }
            }else{
                alert('No hay 9 elementos');
                return false
            }
            // impide que se invoque el CGI del campo action

            
}
function validar(y, z)
            {
                letras = "TRWAGMYFPDXBNJZSQVHLCKET"
                return (z == letras[y % 23])
            }
