export const getLogin = (data) => {
  fetch('http://localhost:8081/api/login-pengguna', {
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
      window.location.reload();
  });
}
