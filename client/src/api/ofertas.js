const baseURL = "http://localhost:8000/aplicant_employee_api/api/v1/ofertas/";

export const getOffers = async () => {
    return await fetch(baseURL, {
        "method": 'GET',
        "headers": {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    }).then((res) => res.json());
}

export const createOffers = async (newOffer) => {
    return await fetch(baseURL, {
        "method": 'POST',
        "headers": {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        "body": JSON.stringify(newOffer)
    }).then((res) => res.json());
}

export const partialUpdateOffer = async (offerId, newOfferInfo) => {
    return await fetch(baseURL + offerId + "/", {
        "method": 'PATCH',
        "headers": {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        "body": JSON.stringify(newOfferInfo)
    }).then((res) => res.json());
}

export const getOfferById = async (offerId) => {
    return await fetch(
        baseURL + offerId, {
        'method': 'GET',
        "headers": {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    }).then((res) => res.json());
};

export const deleteOffer = async (offerId) => {
    return await fetch(
        baseURL + offerId, {
        'method': 'DELETE',
        "headers": {
            'Content-Type': 'application/json',
        }
    }).then((res) => res.text());
}