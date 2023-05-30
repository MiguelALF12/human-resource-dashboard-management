const baseURL = 'http://localhost:8000/aplicant_employee_api/api/v1/documentosaplicante/';
export const createDocuments = async (files) => {
    // for (const pair of files.entries()) {
    //     console.log(`${pair[0]}, ${pair[1]}`);
    // }
    return await fetch(baseURL + "load_files/", {
        "method": "POST",
        "body": files,
        "Content-Type": "multipart/form-data"
    }).then((res) => res.json());
}

export const getAplicantDocuments = async (userId) => {
    return await fetch(
        baseURL + userId + '/get_documents_per_user/', {
        "method": 'GET',
        "headers": {
            'Accept': '*/*',
            'User-Agent': 'request',
        }
    }).then((res) => res.blob());
}

export const updateDocs = async (userId, newDocs) => {
    return await fetch(
        baseURL + userId + '/update_files/',
        {
            "method": 'PUT',
            "body": newDocs
        }
    ).then((res) => res.json());
}
