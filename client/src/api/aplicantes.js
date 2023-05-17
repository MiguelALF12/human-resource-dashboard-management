const baseURL = "http://localhost:8000/aplicant_employee_api/api/v1/aplicantes/";

export const createAplicant = async (aplicant) => {
    console.log(aplicant)
    await fetch(baseURL, {
        "method": 'POST',
        "headers": {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        "body": JSON.stringify(aplicant)
    })
}