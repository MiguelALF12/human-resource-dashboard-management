

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
    // console.log("Información a guardar en local storage: ")
    for (const pair of formData.entries()) {
        console.log(pair[0], pair[1]);
    }
    //Saving every other info different than files
    for (const entry of formData.entries()) {
        // console.log("Info to load on localStorage: ", entry);
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
        RESULTADOS_ENTREVISTA: localStorage.getItem("RESULTADOS_ENTREVISTA")
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
/**
 * Se puede utilizar un localstorage para que permanezca el texto necesario, por otra parte, los resultados de entrevista pueden ser subidos al aplicante sin necesidad que dependan de ser empleado, esto como manera dee retroalimentar al aplicante en cada aoferta.
 * en resumen, subir los resultados de entrevista a otros en server, y la otra información que perdure para la contratación, ya que es necesaria para esta parte solamente.  \  
 */
