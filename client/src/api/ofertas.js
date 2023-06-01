import axios from 'axios'

export const getAllOfferts = () =>{
    return axios.get('http://localhost:8000/aplicant_employee_api/api/v1/ofertas/')
}