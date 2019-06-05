import Axios from 'axios'

const loginApiClient = Axios.create({
    baseURL: 'http://localhost:9050/users',
    headers: {
        'content-type': 'application/json'
    }
})

export const loginClient = {
    async fullLogin(username: string, password: string){
        let result = await loginApiClient.post('/login',{
            username: username,
            password: password
        })
        return result.data
    }
}