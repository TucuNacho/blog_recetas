const urlRecetas = import.meta.env.VITE_API_RECETAS;

export const agregarRecetas = async (nuevaReceta) => {
  try {
    const respuesta = await fetch(urlRecetas, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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
      },
      body: JSON.stringify(recetaEditada),
    });
    return respuesta;
  } catch (error) {
    console.error(error);
    return null;
  }
};
