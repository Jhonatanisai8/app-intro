console.log("Hola Mundo Axios");
function obtenerUsuarios() {
  axios({
    url: "https://jsonplaceholder.typicode.com/users",
    method: "GET",
  })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
}

obtenerUsuarios();
