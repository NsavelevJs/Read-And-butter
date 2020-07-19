import api from './apiconfig'



export const getUsers = async () => {
  const response = await api.get('/users')
  return response.data
}

export const getArticle = async (id) => {
  const response = await api.get(`/users/${id}/`)
  return response.data
}

export const addArticle = async (id, Info) => {
  const response = await api.post(`/tags/${id}/articles`, { article: Info })
  return response.data
}
export const putArticle = async (id, Info) => {
  const resp = await api.put(`/tags/${id}`, { article: Info })
  return resp.data;
}

export const getTags = async () => {
  const response = await api.get('/tags')
  return response.data
}