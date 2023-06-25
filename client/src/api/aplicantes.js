/**
 * #TODO: Por que no funciona el retorno de ID por parte de #createAplicant?.Se mandara hasta que se solucione la cedula del aplicante.
 * #TODO: Crear un indicativo de que el usuario ha sido o no creado. 
 */
const baseURL = "http://localhost:8000/aplicant_employee_api/api/v1/aplicantes/";

export const createAplicant = async (aplicant) => {
    return await fetch(baseURL, {
        "method": 'POST',
        "headers": {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        "body": JSON.stringify(aplicant)
    }).then((res) => res.json());
}

export const authenticateUser = async (credentials) => {
    return await fetch(
        baseURL + "authenticate/", {
        "method": 'POST',
        "headers": {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        "body": JSON.stringify(credentials)
    }).then((res) => res.json());
}

export const getAplicant = async (identification) => {
    return await fetch(
        baseURL + identification,
        {
            "method": 'GET',
            "headers": {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        }

    ).then((res) => res.json());
}

export const partialUpdateAplicant = async (identification, userNewInfo) => {
    return await fetch(
        baseURL + identification + '/',
        {
            "method": 'PATCH',
            "headers": {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            "body": JSON.stringify(userNewInfo)
        }

    ).then((res) => res.json());
}

export const partialUpdateAplicantCredentials = async (userNewCredentials) => {
    return await fetch(
        baseURL + 'update_user_credentials/',
        {
            "method": 'PATCH',
            "headers": {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            "body": JSON.stringify(userNewCredentials)
        }

    ).then((res) => res.json());
}