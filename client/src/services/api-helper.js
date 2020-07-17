import api from './apiconfig'



export const getUsers = async () => {
  const response = await api.get('/user')
  return response.data
}

export const getArticle = async (id) => {
  const response = await api.get(`/user/${id}/`)
  return response.data
}

export const addArticle = async (id, Info) => {
  const response = await api.post(`/user/${id}/article`, { article: Info })
  return response.data
}