import api from "../api";

export async function buscaUsuario(name) {
  try {
    const res = await api.get("/users?login=" + name);
    return res.data[0];
  } catch (error) {
    console.log(error);
    return {};
  }
}
