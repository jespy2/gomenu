import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/',
})

// export const testScrape = () => api.get(`/testScrape`)
export const getRecipe = (url: any) => api.get('/api', {
  params: {
    user_url: url
  }
})
// export const insertBook = payload => api.post(`/book`, payload)
// export const getAllBooks = () => api.get(`/books`)
// export const updateBookById = (id, payload) => api.put(`/book/${id}`, payload)
// export const deleteBookById = id => api.delete(`/book/${id}`)
// export const getBookById = id => api.get(`/book/${id}`)

const apis = {
  // testScrape,
  getRecipe
  // insertBook,
  // getAllBooks,
  // updateBookById,
  // deleteBookById,
  // getBookById,
}

export default apis