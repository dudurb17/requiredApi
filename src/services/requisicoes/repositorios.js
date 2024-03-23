import api from "../api";

export async function pegarRepositoriosDoUsuario(id) {
  try {
    const res = await api.get("/repos?postId=" + id);
    return res.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}
