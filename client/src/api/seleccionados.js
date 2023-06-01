const baseURL = "http://localhost:8000/aplicant_employee_api/api/v1/seleccionados/";

export const createSeleccionado = async (selectedAplicant) => {
    return await fetch(baseURL, {
        "method": 'POST',
        "headers": {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        "body": JSON.stringify(selectedAplicant)
    }).then((res) => res.json());
}
