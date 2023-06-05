const baseURL = "http://localhost:8000/aplicant_employee_api/api/v1/ofertas/";

export const getOffers = async () => {
    return await fetch(baseURL, {
        "method": 'GET',
        "headers": {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    }).then((res) => res.json());
}

