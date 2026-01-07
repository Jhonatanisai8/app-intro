console.log("Hola Mundo Axios");
async function obtenerUsuarios() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return response.data;
  } catch (error) {
    console.log("error al obtener usuarios".error);
  }
}

async function init() {
  const usuarios = await obtenerUsuarios();
  console.log(usuarios);
}

init();
