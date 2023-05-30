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
        "OTROS"]

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