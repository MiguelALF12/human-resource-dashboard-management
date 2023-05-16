import axios from "axios"

const userAplicantApi = axios.create({
    headers: {
        post: {
            // "Content-Type": 'application/x-www-form-urlencoded'
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    },
    baseURL: "http://localhost:8000/aplicant_employee_api/api/v1/aplicantes/"
})

export const createAplicant = (aplicant) => userAplicantApi.post("/", aplicant)

