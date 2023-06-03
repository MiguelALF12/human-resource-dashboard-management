const baseURL = "http://localhost:8000/analyst_api/api/v1/empleados/";

export const createEmpleado = async (aplicantId) => {
    return await fetch(baseURL, {
        "method": 'POST',
        "headers": {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        "body": JSON.stringify(aplicantId)
    }).then((res) => res.json());
}