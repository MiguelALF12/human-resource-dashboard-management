const baseURL = "http://localhost:8000/analyst_api/api/v1/empleados/";

export const createEmpleado = async (aplicant) => {
    // Aplicant contine el id y campos faltantes para empleados (comparando aplicante y empleado)
    return await fetch(baseURL, {
        "method": 'POST',
        "headers": {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        "body": JSON.stringify(aplicant)
    }).then((res) => res.json());
}

export const getEmpleados = async () => {
    return await fetch(
        baseURL,
        {
            "method": 'GET',
            "headers": {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        }

    ).then((res) => res.json());
}