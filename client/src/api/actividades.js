/**?
 * Actividades - Crear, eliminar, lilstar y actualizar
 * Empleados en actividades - Crear, eliminar,listar, actualizar
 */

const activitiesURL = "http://localhost:8000/analyst_api/api/v1/actividades/";
const employessInActivitiesURL = "http://localhost:8000/analyst_api/api/v1/empleadoenactividades/"

export const createActivity = async (newActivity) => {
    console.log(newActivity)
    return await fetch(activitiesURL, {
        "method": 'POST',
        "headers": {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        "body": JSON.stringify(newActivity)
    }).then((res) => res.json());
}
export const deleteActivity = async (activityId) => {
    return await fetch(activitiesURL + activityId + "/", {
        "method": 'DELETE',
        "headers": {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    }).then((res) => res.text());
}
export const listActivities = async () => {
    return await fetch(activitiesURL, {
        "method": 'GET',
        "headers": {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    }).then((res) => res.json());
}
export const updateActivity = async (activityId, newSpecs) => {
    return await fetch(activitiesURL + activityId + "/", {
        "method": 'PUT',
        "headers": {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        "body": JSON.stringify(newSpecs)
    }).then((res) => res.json());
} //Metemos put o patch?




export const createEmployeeInActivity = async (addedEmployeeInActivity) => {
    console.log(addedEmployeeInActivity)
    return await fetch(employessInActivitiesURL, {
        "method": 'POST',
        "headers": {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        "body": JSON.stringify(addedEmployeeInActivity)
    }).then((res) => res.json());
}


export const deleteEmployeeInActivity = async (employeeInActivityId) => {
    return await fetch(employessInActivitiesURL + employeeInActivityId + "/", {
        "method": 'DELETE',
        "headers": {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    }).then((res) => res.json());
}
export const listEmployeeInActivity = async () => {
    return await fetch(employessInActivitiesURL, {
        "method": 'GET',
        "headers": {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    }).then((res) => res.json());
}
export const updateEmployeeInActivity = async (employeeInActivityId, newSpecs) => {
    return await fetch(employessInActivitiesURL + employeeInActivityId + "/", {
        "method": 'PUT',
        "headers": {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        "body": JSON.stringify(newSpecs)
    }).then((res) => res.json());
}



