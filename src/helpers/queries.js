const urlRecetas = import.meta.env.VITE_API_RECETAS;
const urlUsuario = import.meta.env.VITE_API_USUARIO;
console.log("URL Usuario:", urlUsuario);

export const crearRecetas = async (nuevaReceta) => {
  try {
    const respuesta = await fetch(urlRecetas, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-token": JSON.parse(sessionStorage.getItem("userKey")).token,
      },
      body: JSON.stringify(nuevaReceta),
    });
    return respuesta;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const leerReceta = async () => {
  try {
    const respuesta = await fetch(urlRecetas);
    return respuesta;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const leerRecetaPorId = async (id) => {
  try {
    const respuesta = await fetch(urlRecetas + `/${id}`);
    return respuesta;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const borrarReceta = async (id) => {
  try {
    const respuesta = await fetch(urlRecetas + `/${id}`, {
      method: "DELETE",
      headers: {
        "x-token": JSON.parse(sessionStorage.getItem("userKey")).token,
      },
    });
    return respuesta;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const editarRecetas = async (recetaEditada, id) => {
  try {
    const respuesta = await fetch(urlRecetas + `/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-token": JSON.parse(sessionStorage.getItem("userKey")).token
      },
      body: JSON.stringify(recetaEditada),
    });
    return respuesta;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const login = async (datosUsuario) => {
  try {
    console.log("Datos que se envían:", datosUsuario);
    const respuesta = await fetch(urlUsuario + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datosUsuario),
    });
    console.log("Status de respuesta:", respuesta.status);
    return respuesta;
  } catch (error) {
    console.error(error);
    return null;
  }
};
