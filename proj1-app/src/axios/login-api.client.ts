import Axios from 'axios'

const loginApiClient = Axios.create({
    baseURL: 'http://localhost:9050/users'
})

export const chuckNorrisClient = {
    async fullLogin(){
        let result = await loginApiClient.post('/login')
        return result.data.value
    }
}