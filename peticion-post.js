console.log("Hola Mundo");

async function crearPost() {
  try {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      {
        userId: "1",
        title: "Mi prueba mediante post con axios",
        body: "Contenido del post enviado",
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error al crear el post:", err);
  }
}

async function init() {
  const response = await crearPost();
  console.log(response);
}
init();
