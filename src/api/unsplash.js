import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 7q-ZT5cr5aCJHWFnzBOma8nsE0OvIMkNS-uDihS9Ggo',
  },
})
