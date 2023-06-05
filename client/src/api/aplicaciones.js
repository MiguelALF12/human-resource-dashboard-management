const baseURL = "http://localhost:8000/aplicant_employee_api/api/v1/aplicaciones/";

export const getAplications = async () => {
    return await fetch(baseURL, {
        "method": 'GET',
        "headers": {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    }).then((res) => res.json());
}

export const removeAplication = async (aplicationId) => {
    console.log(aplicationId);
    return await fetch(baseURL + aplicationId + "/", {
        "method": 'DELETE',
        "headers": {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    }).then((res) => res.text());
}