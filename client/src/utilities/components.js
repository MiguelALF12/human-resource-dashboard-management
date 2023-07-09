/*
 * #TODO: Corregir compareTwoObjects() de manera tal que la comparasión sea más precisa y no detecta como verdadero "True" != true. 
    inlcuso para los casos en donde se ingresa texto y el unico cambio es un espacio
 */

import { createAvatar } from '@dicebear/core';
import { identicon } from '@dicebear/collection';


export const htmlStrToElement = (userProfileImg) => {
    let userProfileImageNode = document.createRange().createContextualFragment(userProfileImg);
    return userProfileImageNode;


}

export const assignProfileImg = (userSeed) => {
    const avatar = createAvatar(identicon,
        {
            seed: userSeed,
            backgroundColor: ["b6e3f4", "c0aede", "d1d4f9"],
            size: 80
        }
    )
    return avatar.toString();
}

export function compareTwoWithCriteria(first, criterias) {
    if (first === criterias[0]) {
        return 0;
    } else if (first === criterias[1]) {
        return 1;
    }
}

export function compareThreeWithCriteria(first, criterias) {
    if (first === criterias[0]) {
        return 0;
    } else if (first === criterias[1]) {
        return 1;
    } else if (first === criterias[2]) {
        return 2;
    }
}

export function compareTwoObjects(newInfo, fetchedInfo) {
    console.log("Información actualizada: ", newInfo)
    console.log("Información fetcheada: ", fetchedInfo)
    return JSON.stringify(newInfo) !== JSON.stringify(fetchedInfo) ? true : false
}

export const addDataIntoLocalStorage = (formData) => {
    for (const pair of formData.entries()) {
        console.log(pair[0], pair[1]);
    }
    //Saving every other info different than files
    for (const entry of formData.entries()) {
        if (entry[1] instanceof File) {
            const reader = new FileReader();
            reader.readAsDataURL(entry[1]);
            reader.addEventListener('load', () => {
                // console.log(reader.result)
                localStorage.setItem(entry[0], reader.result);
            })
        }
        localStorage.setItem(entry[0], entry[1]);
    }
};

export const getDataFromLocalStorage = () => {

    let preHiringData = {
        hojaDeVidaCheck: localStorage.getItem("hojaDeVidaCheck"),
        cedulaCheck: localStorage.getItem("cedulaCheck"),
        certificadoEducacionCheck: localStorage.getItem("certificadoEducacionCheck"),
        isAplicantSelectedYes: localStorage.getItem("isAplicantSelectedYes"),
        cartaExperienciaLaboralCheck: localStorage.getItem("cartaExperienciaLaboralCheck"),
        certificadoEpsCheck: localStorage.getItem("certificadoEpsCheck"),
        certificadoPensionCheck: localStorage.getItem("certificadoPensionCheck"),
        beneficiosCheck: localStorage.getItem("beneficiosCheck"),
        otrosCheck: localStorage.getItem("otrosCheck"),
        resultadosEntrevista: localStorage.getItem("resultadosEntrevista"),
        // RESULTADOS_ENTREVISTA: (async () => await createFileFromURL(localStorage.getItem("RESULTADOS_ENTREVISTA"), "RESULTADOS_ENTREVISTA"))(),
        RESULTADOS_ENTREVISTA: localStorage.getItem("RESULTADOS_ENTREVISTA"),
        idSeleccion: localStorage.getItem("idSeleccion"),
        idAplicacion: localStorage.getItem("idAplicacion"),
    }
    return preHiringData;
}

export const getLenghtOfFormData = (formData) => {
    let count = 0;
    for (let _ of formData.entries()) {
        count += 1;
    }
    return count;
}

export const filterRecords = (records, filterOptions) => {
    return records.filter((record) => {
        if (filterOptions.parameter !== 'Seleccione') {
            switch (filterOptions.parameter) {
                case 'id':
                    return record.id.toString() === filterOptions.pattern;
                case 'nombre':
                    return record.nombre.toLowerCase().includes(filterOptions.pattern.toLowerCase());
                case 'salario':
                    return parseInt(record.salario.replaceAll(".", '')) >= parseInt(filterOptions.pattern.replaceAll(".", ''));
                case 'experiencia':
                    return parseInt(record.experienciaAnos) >= parseInt(filterOptions.pattern);
                case 'estado':
                    return record.estadoDisponibilidad.toLowerCase() === filterOptions.pattern.toLowerCase()
                case 'vacantes':
                    return parseInt(record.vacantes) >= parseInt(filterOptions.pattern);
                case 'nombreEmpleado':
                    console.log(record, filterOptions.pattern);
                    console.log(record, record.nombre.toLowerCase() === filterOptions.pattern.toLowerCase() || record.nombre.toLowerCase().includes(filterOptions.pattern.toLowerCase()))
                    return record.nombre.toLowerCase() === filterOptions.pattern.toLowerCase() || record.nombre.toLowerCase().includes(filterOptions.pattern.toLowerCase());
                case 'apellidoEmpleado':
                    return record.apellido.toLowerCase() === filterOptions.pattern.toLowerCase() || record.apellido.toLowerCase().includes(filterOptions.pattern.toLowerCase());
                case 'cedula':
                    return record.cedula === filterOptions.pattern || record.cedula.includes(filterOptions.pattern);
                case 'cargoEmpleado':
                    return record.cargo.toLowerCase() === filterOptions.pattern.toLowerCase() || record.cargo.toLowerCase().includes(filterOptions.pattern.toLowerCase());;
                default:
                    return true;
            }
        }
    });
}


export const includedOnUsersPaths = (currentPath) => {
    let usersPaths = ["myAplications", "profile", "offer"];
    for (let path of usersPaths) {
        if (currentPath.includes(path)) {
            return true;
        }
    }
    return false;
}

export const searchAplicationIn = (currentAplications, selectedAplications) => {
    for (let aplication of currentAplications) {
        aplication.estadoFase = "En evaluación"
        for (let selection of selectedAplications) {
            if (aplication.id === selection.idAplicacion) {
                aplication.estadoFase = selection.faseAplicante;
                break
            }
        }
    };
}


export const getEmployeeRole = (employees, contracts) => {
    for (let contract of contracts) {
        for (let employee of employees) {
            if (contract.idEmpleado === employee.id) {
                employee.cargo = contract.cargo
                break;
            }
        }

    }
}