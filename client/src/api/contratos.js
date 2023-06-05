const baseURL = "http://localhost:8000/analyst_api/api/v1/contratos/";

export const createContract = async (contractSpecs) => {
    return await fetch(baseURL, {
        "method": 'POST',
        "headers": {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        "body": JSON.stringify(contractSpecs)
    }).then((res) => res.json());
}