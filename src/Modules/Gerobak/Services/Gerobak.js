module.exports =  {
    getDatalist: function() {
        fetch('http://localhost:8081/api/login-pengguna', {
          method: 'GET',
          headers: {
                  "Content-type": "application/json; charset=UTF-8",
                  "brambang-access-token" : sessionStorage.getItem("currentToken")

          }
        }).then(response => {
            return response.json();
        }).then(result => {
            return result;
        });
    }
}
