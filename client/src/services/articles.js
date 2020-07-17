import api from './apiconfig'
export const getArticles = async () => {
    const response = await api.get('/articles')
    return response.data
}