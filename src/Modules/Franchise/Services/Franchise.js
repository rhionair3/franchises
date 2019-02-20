export const getFranchiseList = () => {
    return fetch('http://localhost:8081/api/franchise', {
        method: 'GET',
        headers: {
                "Content-type": "application/json; charset=UTF-8",
                "brambang-access-token" : sessionStorage.getItem("currentToken")

        }
    });
}

export const getFranchiseDetail = (franchiseID) => {
    console.log(franchiseID);
    return fetch('http://localhost:8081/api/detail-franchise', {
        method: 'POST',
        body: JSON.stringify({
            id : franchiseID
        }),
        headers: {
                "Content-type": "application/json; charset=UTF-8",
                "brambang-access-token" : sessionStorage.getItem("currentToken")

        }
    });
}

export const getFranchiseDetailDetail = (franchiseID) => {
    console.log(franchiseID);
    return fetch('http://localhost:8081/api/detail-detailfranchise', {
        method: 'POST',
        body: JSON.stringify({
            franchise_id : franchiseID
        }),
        headers: {
                "Content-type": "application/json; charset=UTF-8",
                "brambang-access-token" : sessionStorage.getItem("currentToken")

        }
    });
}

export const getFranchiseKokiDetail = (franchiseID) => {
    console.log(franchiseID);
    return fetch('http://localhost:8081/api/koki-franchise', {
        method: 'POST',
        body: JSON.stringify({
            franchise_id : franchiseID
        }),
        headers: {
                "Content-type": "application/json; charset=UTF-8",
                "brambang-access-token" : sessionStorage.getItem("currentToken")

        }
    });
}

export const createFranchise = () => {
    return fetch('http://localhost:8081/api/master/detail-gerobak', {
        method: 'POST',
        body: JSON.stringify({
        }),
        headers: {
                "Content-type": "application/json; charset=UTF-8",
                "brambang-access-token" : sessionStorage.getItem("currentToken")

        }
    });
}

export const updateFranchise = (datafranchise) => {
    return fetch('http://localhost:8081/api/master/detail-gerobak', {
        method: 'POST',
        body: JSON.stringify({
            id : datafranchise
        }),
        headers: {
                "Content-type": "application/json; charset=UTF-8",
                "brambang-access-token" : sessionStorage.getItem("currentToken")

        }
    });
}

export const deleteFranchise = (franchiseId) => {
    return fetch('http://localhost:8081/api/master/detail-gerobak', {
        method: 'POST',
        body: JSON.stringify({
            id : franchiseId
        }),
        headers: {
                "Content-type": "application/json; charset=UTF-8",
                "brambang-access-token" : sessionStorage.getItem("currentToken")

        }
    });
}

export const createFranchiseDetail = () => {
    return fetch('http://localhost:8081/api/master/detail-gerobak', {
        method: 'POST',
        body: JSON.stringify({
        }),
        headers: {
                "Content-type": "application/json; charset=UTF-8",
                "brambang-access-token" : sessionStorage.getItem("currentToken")

        }
    });
}

export const updateFranchiseDetail = (fdetaiID) => {
    return fetch('http://localhost:8081/api/master/detail-gerobak', {
        method: 'POST',
        body: JSON.stringify({
        }),
        headers: {
                "Content-type": "application/json; charset=UTF-8",
                "brambang-access-token" : sessionStorage.getItem("currentToken")

        }
    });
}

export const getFranchiseGerobakList = (franchiseID) => {
    return fetch('http://localhost:8081/api/master/detail-gerobak', {
        method: 'POST',
        body: JSON.stringify({
        }),
        headers: {
                "Content-type": "application/json; charset=UTF-8",
                "brambang-access-token" : sessionStorage.getItem("currentToken")

        }
    });
}

export const getFranchiseKokiList = (franchiseID) => {
    return fetch('http://localhost:8081/api/master/detail-gerobak', {
        method: 'POST',
        body: JSON.stringify({
        }),
        headers: {
                "Content-type": "application/json; charset=UTF-8",
                "brambang-access-token" : sessionStorage.getItem("currentToken")

        }
    });
}