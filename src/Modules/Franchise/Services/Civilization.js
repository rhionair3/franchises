export const getProvince = () => {
    return fetch('http://localhost:8081/api/provincy', {
        method: 'POST',
        body: JSON.stringify({
            orders : 999
        }),
        headers: {
                "Content-type": "application/json; charset=UTF-8",
                "brambang-access-token" : sessionStorage.getItem("currentToken")

        }
    });
};

export const getRegency = (province_id) => {
    return fetch('http://localhost:8081/api/regencye', {
        method: 'POST',
        body: JSON.stringify({
            province_id : province_id
        }),
        headers: {
                "Content-type": "application/json; charset=UTF-8",
                "brambang-access-token" : sessionStorage.getItem("currentToken")

        }
    });
};
export const getDistrict = (regency_id) => {
    return fetch('http://localhost:8081/api/district', {
        method: 'POST',
        body: JSON.stringify({
            regency_id : regency_id
        }),
        headers: {
                "Content-type": "application/json; charset=UTF-8",
                "brambang-access-token" : sessionStorage.getItem("currentToken")

        }
    });
};

export const getPostal = (district_id) => {
    return fetch('http://localhost:8081/api/regencye', {
        method: 'POST',
        body: JSON.stringify({
            district_id : district_id
        }),
        headers: {
                "Content-type": "application/json; charset=UTF-8",
                "brambang-access-token" : sessionStorage.getItem("currentToken")

        }
    });
};