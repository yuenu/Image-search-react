import axios from 'axios'


export default axios.create({
  baseURL:'https://api.unsplash.com/',
  headers:{
    Authorization: 'Client-ID sb6Iye-jR7w4Ha1lye8Vete8J341bUd48_YvChb43-8'
  }
})