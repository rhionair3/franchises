export const getMasterGerobak = () => {
    return fetch('http://192.168.1.52:8081/api/master/gerobak', {
        method: 'GET',
        headers: {
                "Content-type": "application/json; charset=UTF-8",
                "brambang-access-token" : sessionStorage.getItem("currentToken")

        }
    });
};

export const getMasterGerobakDetail = (value) => {
    return fetch('http://192.168.1.52:8081/api/master/detail-gerobak', {
        method: 'POST',
        body: JSON.stringify({
            id : value
        }),
        headers: {
                "Content-type": "application/json; charset=UTF-8",
                "brambang-access-token" : sessionStorage.getItem("currentToken")

        }
    });
};

export const simpanDataGerobak = (dataSimpan) => {
    if(dataSimpan.id && (dataSimpan.id !== null || dataSimpan.id !== "")) {
        return fetch("http://192.168.1.52:8081/api/master/edit-gerobak", {
            method: 'POST',
            body: JSON.stringify({
                id : dataSimpan.id,
                code : dataSimpan.code,
                name : dataSimpan.name,
                status: dataSimpan.status,
                updatedBy : sessionStorage.getItem("currentUser").id
            }),
            headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    "brambang-access-token" : sessionStorage.getItem("currentToken")
    
            }
        });
    } else {
        return fetch("http://192.168.1.52:8081/api/master/tambah-gerobak", {
            method: 'POST',
            body: JSON.stringify({
                id : dataSimpan.id,
                code : dataSimpan.code,
                name : dataSimpan.name,
                status : dataSimpan.status,
                createdBy : sessionStorage.getItem("currentUser").id
            }),
            headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    "brambang-access-token" : sessionStorage.getItem("currentToken")
    
            }
        });
    }
    
};