const employeesURL = "http://localhost:8000/analyst_api/api/v1/empleados/";
const retirosURL = "http://localhost:8000/analyst_api/api/v1/retiros/";
const liquidacionesURL = "http://localhost:8000/analyst_api/api/v1/liquidaciones/";

// EMPLEADOS endpoints
export const createEmpleado = async (aplicant) => {
    // Aplicant contine el id y campos faltantes para empleados (comparando aplicante y empleado)
    return await fetch(employeesURL, {
        "method": 'POST',
        "headers": {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        "body": JSON.stringify(aplicant)
    }).then((res) => res.json());
}

export const listEmpleados = async () => {
    return await fetch(
        employeesURL,
        {
            "method": 'GET',
            "headers": {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        }

    ).then((res) => res.json());
}


export const updateEmployee = async (employeeId, newSpecs) => {
    return await fetch(employeesURL + newSpecs + "/", {
        "method": 'PUT',
        "headers": {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        "body": JSON.stringify(newSpecs)
    }).then((res) => res.json());
}

export const deleteEmployee = async (employeeId) => {
    return await fetch(employeesURL + employeeId + "/", {
        "method": 'DELETE',
        "headers": {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    }).then((res) => res.json());
}


/**
 * Crear retiros
 * Crear, eliminar  liquidaciones
 */

// RETIROS endpoints

export const createRetiros = async (newRetiro) => {
    return await fetch(retirosURL, {
        "method": 'POST',
        "headers": {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        "body": JSON.stringify(newRetiro)
    }).then((res) => res.json());
}

export const listRetiros = async () => {
    return await fetch(
        retirosURL,
        {
            "method": 'GET',
            "headers": {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        }

    ).then((res) => res.json());
}


export const updateRetiros = async (retiroId, newSpecs) => {
    return await fetch(retiroId + newSpecs + "/", {
        "method": 'PUT',
        "headers": {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        "body": JSON.stringify(newSpecs)
    }).then((res) => res.json());
}

export const deleteRetiros = async (retiroId) => {
    return await fetch(retirosURL + retiroId + "/", {
        "method": 'DELETE',
        "headers": {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    }).then((res) => res.json());
}

// LIQUIDACIONES endpoints

export const createLiquidaciones = async (newLiquidacion) => {
    return await fetch(liquidacionesURL, {
        "method": 'POST',
        "headers": {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        "body": JSON.stringify(newLiquidacion)
    }).then((res) => res.json());
}

export const listLiquidaciones = async () => {
    return await fetch(
        liquidacionesURL,
        {
            "method": 'GET',
            "headers": {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        }

    ).then((res) => res.json());
}


export const updateLiquidaciones = async (liquidacionId, newSpecs) => {
    return await fetch(liquidacionesURL + liquidacionId + "/", {
        "method": 'PUT',
        "headers": {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        "body": JSON.stringify(newSpecs)
    }).then((res) => res.json());
}

export const deleteLiquidaciones = async (liquidacionId) => {
    return await fetch(liquidacionesURL + liquidacionId + "/", {
        "method": 'DELETE',
        "headers": {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    }).then((res) => res.json());
}
