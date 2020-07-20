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

export const putArticle = async (tag_id, id , Info) => {
  const resp = await api.put(`/tags/${tag_id}/articles/${id}`, { article: Info })
  return resp.data;
}

// articles#destroy
export const deleteArticle = async (tag_id,id) => {
  const resp = await api.delete(`/tags/${tag_id}/articles/${id}`)
  return resp.data;
}
                                                   

export const getTags = async () => {
  const response = await api.get('/tags')
  return response.data
}