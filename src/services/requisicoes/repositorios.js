import api from "../api";

export async function pegarRepositoriosDoUsuario(id, name) {
  try {
    const res = await api.get("/repos?postId=" + id + "&name=" + name);
    return res.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function updateRepositoriosDoUsuario(postId, nome, data, id) {
  try {
    await api.put("/repos/" + id, {
      name: nome,
      data: data,
      postId: postId,
      id: id,
    });
    return "sucesso";
  } catch (error) {
    console.log(error);
    return "erro";
  }
}

export async function pegarRepositoriosDoUsuarioName(id, name) {
  try {
    const res = await api.get("/repos?postId=" + id + "name=" + name);
    return res.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function createRepositorio(postId, name, data) {
  try {
    await api.post("/repos", {
      postId,
      name,
      data,
    });
    return "sucesso";
  } catch (error) {
    console.log(error);
    return "erro";
  }
}
