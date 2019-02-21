export const getLogin = (data) => {
  fetch('http://192.168.1.52:8081/api/login-pengguna', {
    method: 'POST',
    body: JSON.stringify({
        email:data.email,
        password: data.password

    }),
    headers: {
            "Content-type": "application/json; charset=UTF-8"
    }
  }).then(response => {
      return response.json();
  }).then(result => {
      sessionStorage.setItem('isAuthenticated', true);
      sessionStorage.setItem('currentToken', result.aksesToken);
      sessionStorage.setItem('currentUser', result.datapengguna);
      window.location.reload();
  });
}
