const baseURL = 'http://localhost:8000/aplicant_employee_api/api/v1/documentosaplicante/load_files/';
export const createDocuments = async (files) => {
    // for (const pair of files.entries()) {
    //     console.log(`${pair[0]}, ${pair[1]}`);
    // }
    await fetch(baseURL, {
        "method": "POST",
        "body": files,
        "Content-Type": "multipart/form-data"
    });
}