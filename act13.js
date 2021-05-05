//Crear un programa en javascript que ejecute por medio de PROMESAS los siguientes procesos de manera síncrona.
//Proceso 1: Comprar Casco, duración: 1 segundo
//Proceso 2: Comprar guantes, duración 2 segundos
//Proceso 3: Ir de paseo en bici: 8 segundos:
//Utilizar funciones con flechita
//Compartir el link del repositiorio de github (.../ejercicio_x)

const comprarCasco = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(
            {
                msg : "casco comprado..."
            }
        )
    }, 1000)
})

const comprarGuantes = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(
            {
                msg :"Guantes comprados"
            }
        )
    }, 2000)
})

const irDePaseo = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(
            {
                msg :"paseando"
            }
        )
    }, 1000)
})

const paseandojajaj = ()=>{
    comprarCasco
    .then(infocasc=>{
        console.log(infocasc)
        return comprarGuantes;
    })
    .then(infoguan=>{
        console.log(infoguan);
        return irDePaseo;
    })
    .then(infopas=>{
        console.log(infopas);
    })
    .catch(error =>{
        console.log(error)
    })
    .finally(()=> console.log("proceso finalizado"))
}


paseandojajaj();