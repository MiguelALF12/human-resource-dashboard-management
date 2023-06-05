/**
 * #TODO: Would it be neccesarry to add validation for medical results?
 */

import JSZip, { files } from "jszip";

export const appendTypeName = (documenType, name) => {
    let splitted = name.split('.');
    let newName = splitted[0] + `-${documenType}.` + splitted[1];
    return newName;
}

export function renameFile(documentType, originalFile) {

    return new File([originalFile], appendTypeName(documentType, originalFile.name), {
        type: originalFile.type,
        lastModified: originalFile.lastModified,
    });
}

export function cleanFileName(originalName) {
    const fileTypes = ["CEDULA",
        "LIBRETA_MILITAR",
        "HOJA_DE_VIDA",
        "CERTIFICADOS_EDUCACION",
        "CARTAS_EXPERIENCIA_LABORAL",
        "CERTIFICADO_EPS",
        "CERTIFICADO_PENSION",
        "BENEFICIOS",
        "OTROS",
        "ARL",
        "CAJA_COMPENSACION",
        "EPS",
        "RESULTADOS_ENTREVISTA"]

    // fileTypes.reduce((key, value) => ({ ...key, [value]: value }), {})
    let newName;
    for (let fileType of fileTypes) {
        if (originalName.includes(fileType.toLowerCase())) {
            newName = fileType.toLowerCase();
            break;
        }
    }
    return newName;
}

export function loadReturnedAplicantDocs(res) {
    const zip = new JSZip();
    zip.loadAsync(res)
        .then(function (zip) {
            // Obtener la lista de nombres de archivo
            const fileNames = Object.keys(zip.files);

            // Generar enlaces de descarga para cada archivo
            const downloadLinks = fileNames.map(function (fileName) {
                const file = zip.files[fileName];
                if (file.name.includes("Users/miguellopez/Desktop/UNIVERSIDAD/Projects/SW-Recursos-humanos/server/media/aplicants/")) {
                    file.name = file.name.replace("Users/miguellopez/Desktop/UNIVERSIDAD/Projects/SW-Recursos-humanos/server/media/aplicants/", "")
                }
                // Crear un objeto Blob a partir del contenido del archivo
                return file.async('blob')
                    .then(function (fileData) {
                        // Crear un enlace de descarga
                        const link = document.createElement('a');
                        link.href = URL.createObjectURL(fileData);
                        link.download = file.name;
                        link.textContent = file.name;
                        link.id = cleanFileName(file.name.split('-')[1].split('.')[0].toLowerCase()) + "Viewer";
                        return link;
                    });
            });

            // Agregar los enlaces al DOM
            Promise.all(downloadLinks)
                .then(function (links) {
                    links.forEach(function (link) {
                        if (!document.getElementById(link.id).hasChildNodes()) {
                            document.getElementById(link.id).appendChild(link);
                        }
                    });
                });
        })
        .catch(function (error) {
            console.error('Error al cargar el archivo ZIP:', error);
        });
}

const createLink = (file) => {
    const link = document.createElement('a');
    link.href = URL.createObjectURL(file);
    link.download = file.name;
    link.textContent = file.name;
    link.id = cleanFileName(file.name === "RESULTADOS_ENTREVISTA" ? file.name.toLowerCase() : file.name.split('-')[1].split('.')[0].toLowerCase()) + "Viewer";
    return link;
}

const appendLinks = (link) => {
    if (!document.getElementById(link.id).hasChildNodes()) {
        document.getElementById(link.id).appendChild(link);
    }
}
async function createFileFromURL(url, fileName) {
    // console.log("file url: ", url)
    return await fetch(url, { "method": "GET" })
        .then(r => r.blob())
        .then(blobFile => new File([blobFile], fileName, { type: blobFile.type }))
        .then((file) => {
            let documentsLinks = [];
            documentsLinks.push(createLink(file));
            documentsLinks.forEach(appendLinks);
        });
}
export const loadFilesFromLocalStorage = (filesRelated) => {
    let documentsLinks = [];
    // Handle formData (social afiliation documents)
    for (const entry of filesRelated[0].entries()) {
        // console.log(entry[1])
        if (entry[1] instanceof File) {
            documentsLinks.push(createLink(entry[1]));
        }
    }
    documentsLinks.forEach(appendLinks);
    (async () => await createFileFromURL(localStorage.getItem("RESULTADOS_ENTREVISTA"), "RESULTADOS_ENTREVISTA"))()
}

export const freeLocalStorage = () => {
    localStorage.clear();
}