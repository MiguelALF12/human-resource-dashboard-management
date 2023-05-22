/**
 * #TODO: Por que no funciona el retorno de ID por parte de #createAplicant?.Se mandara hasta que se solucione la cedula del aplicante.
 * #TODO: Crear un indicativo de que el usuario ha sido o no creado. 
 */
import axios from 'axios'
const baseURL = "http://localhost:8000/aplicant_employee_api/api/v1/aplicantes/";

export const createAplicant = async (aplicant) => {
    await fetch(baseURL, {
        "method": 'POST',
        "headers": {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        "body": JSON.stringify(aplicant)
    });
}

// export const authenticateUser = (credentials) => {

//     return axios.post(baseURL + "authenticate/", JSON.stringify(credentials));
// }
export const authenticateUser = async (credentials) => {
    return await fetch(
        baseURL + "authenticate/", {
        "method": 'POST',
        "headers": {
            'Content-Type': 'application/json',
        },
        "body": JSON.stringify(credentials)
    }).then((res) => res.json());
}