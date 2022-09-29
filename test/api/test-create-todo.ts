import axios from 'axios'

axios.post('http://localhost:8080/todos', {
    name: 'Nouvelle todo liste'
})
.then(res => {
    console.log(res.data)
})
.catch(err => {
    console.error(err.message)
})
