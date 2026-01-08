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

function mostrarUsarios(usuarios) {
  const contenedorUsuarios = document.getElementById("lista-usuarios");

  contenedorUsuarios.innerHTML = "";

  usuarios.forEach((usuario) => {
    const card = document.createElement("div");
    card.style.border = "1px solid red";

    card.innerHTML = `
    <h3>${usuario.name}</h3>
    <p><strong>Email:</strong> ${usuario.email}</p>
    <p><strong>Ciudad:</strong> ${usuario.address.city}</p>
    `;
    contenedorUsuarios.appendChild(card);
  });
}

async function init() {
  const usuarios = await obtenerUsuarios();
  console.log(usuarios);
  mostrarUsarios(usuarios);
}

init();
