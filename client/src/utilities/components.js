

// confAcademics.js ---------------------------------------------
/*
 * #TODO: Corregir compareTwoObjects() de manera tal que la comparasión sea más precisa y no detecta como verdadero "True" != true. 
    inlcuso para los casos en donde se ingresa texto y el unico cambio es un espacio
 */
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

// -------------------------------------------------------------

// addDataIntoLocalStorage ---------------------------------------------
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

//getDataFromLocalStorage --------------------------------------------- 
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
// ---------------------------------------------------------------

// getLenghtOfFormData --------------------------------------------- 

export const getLenghtOfFormData = (formData) => {
    let count = 0;
    for (let _ of formData.entries()) {
        count += 1;
    }
    // console.log("formData length: ", count);
    return count;
}

// ---------------------------------------------------------------

//
export const filterOffers = (offers, filterOptions) => {
    return offers.filter((offer) => {
        if (filterOptions.parameter !== 'Seleccione') {
            switch (filterOptions.parameter) {
                case 'nombre':
                    return offer.nombre.toLowerCase().includes(filterOptions.pattern.toLowerCase());
                case 'salario':
                    return parseInt(offer.salario.replaceAll(".", '')) >= parseInt(filterOptions.pattern.replaceAll(".", ''));
                case 'experiencia':
                    return parseInt(offer.experienciaAnos) >= parseInt(filterOptions.pattern);
                case 'vacantes':
                    return parseInt(offer.vacantes) >= parseInt(filterOptions.pattern);
                default:
                    return true;
            }
        }
    });
}
//


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
            if (aplication.id === selection.id) {
                aplication.estadoFase = selection.faseAplicante;
                break
            }
        }
    };
} 