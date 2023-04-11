const send = document.getElementById('send')
const resp = document.getElementById('userResponse').value


const descargaShit = () =>{


        if(resp === 69582410){
            window.open('./assets/practicas_dti1_69582410.zip')
            console.log("se deberia descargar")
        }else{
            alert('el codigo ingresado no es correcto. Vuelve a intentarlo por favor o contacta a Asistencia al Alumno')
        }
    }


send.addEventListener(onclick(descargaShit()))