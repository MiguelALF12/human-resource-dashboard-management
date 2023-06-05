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


export const getSeleccionados = async () => {
    return await fetch(baseURL, {
        "method": "GET",
        "headers": {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    }).then((res) => res.json());
}

export const updateSeleccionadoState = async (seleccionId, newState) => {
    return await fetch(
        baseURL + seleccionId + '/',
        {
            "method": 'PATCH',
            "headers": {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            "body": JSON.stringify(newState)
        }

    ).then((res) => res.json());
}

export const removeSeleccionado = async (selectionId) => {
    console.log(selectionId);
    return await fetch(
        baseURL + selectionId + '/',
        {
            "method": 'DELETE',
            "headers": {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        }

    ).then((res) => res.text());
}