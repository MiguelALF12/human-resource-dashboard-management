const aplicantesBaseURL = 'http://localhost:8000/aplicant_employee_api/api/v1/documentosaplicante/';
const empleadosBaseURL = 'http://localhost:8000/analyst_api/api/v1/documentosempleados/';

export const createDocuments = async (files) => {
    // for (const pair of files.entries()) {
    //     console.log(`${pair[0]}, ${pair[1]}`);
    // }
    return await fetch(aplicantesBaseURL + "load_files/", {
        "method": "POST",
        "body": files,
        "Content-Type": "multipart/form-data"
    }).then((res) => res.json());
}

export const getAplicantDocuments = async (userId) => {
    return await fetch(
        aplicantesBaseURL + userId + '/get_documents_per_user/', {
        "method": 'GET',
        "headers": {
            'Accept': '*/*',
            'User-Agent': 'request',
        }
    }).then((res) => res.blob());
}

export const updateDocs = async (userId, newDocs) => {
    console.log("userID: ", userId)
    for (const pair of newDocs.entries()) {
        console.log(`${pair[0]}, ${pair[1]}`);
    }
    return await fetch(
        aplicantesBaseURL + userId + '/update_files/',
        {
            "method": 'PUT',
            "body": newDocs
        }
    ).then((res) => res.json());
}

export const createEmpleadoSocialAfiliationDocuments = async (files) => {
    //REcibe cualquier lista de archvios para un empleado, generlamente todos aquellos relacionados a la afiliación social y el contrato.
    for (const pair of files.entries()) {
        console.log(`${pair[0]}, ${pair[1]}`);
    }
    return await fetch(empleadosBaseURL + "load_files/", {
        "method": "POST",
        "body": files,
        "Content-Type": "multipart/form-data"
    }).then((res) => res.json());
}
