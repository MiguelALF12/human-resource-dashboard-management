// #TODO: Por que no funciona el retorno de ID por parte de #createAplicant?.Se mandara hasta que se solucione la cedula del aplicante.

const baseURL = "http://localhost:8000/aplicant_employee_api/api/v1/aplicantes/";

export const createAplicant = async (aplicant) => {
    await fetch(baseURL, {
        "method": 'POST',
        "headers": {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        "body": JSON.stringify(aplicant)
    }).then((res) => { console.log(res); })
        // .then((data) => {
        //     // return new Promise((resolve, reject) => {
        //     //     setTimeout(() => {
        //     //         resolve(data);
        //     //     }, 3);
        //     // })
        //     // console.log("data on api call: ", data)
        //     return new Promise((resolve, reject) => {
        //         resolve(data);
        //         reject("Error con el ID de usuario");
        //     });
        // })
        .catch((err) => { console.log(err); });

}