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

export const listContract = async () => {
    return await fetch(baseURL, {
        "method": 'GET',
        "headers": {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    }).then((res) => res.json());
}

export const updateContract = async (contractId, contractSpecs) => {
    return await fetch(baseURL + contractId + "/", {
        "method": 'PUT',
        "headers": {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        "body": JSON.stringify(contractSpecs)
    }).then((res) => res.json());
}

export const deleteContract = async (contractId) => {
    return await fetch(baseURL, {
        "method": 'DELETE',
        "headers": {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    }).then((res) => res.json());
}
