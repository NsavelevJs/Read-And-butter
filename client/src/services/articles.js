import api from './apiconfig'
export const getArticles = async () => {
    const response = await api.get('/tags/1/articles')
    return response.data
}
