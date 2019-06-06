import Axios from 'axios'

const userApiClient = Axios.create({
    baseURL: 'http://localhost:9050/users',
    headers: {
        'content-type': 'application/json'
    }
})

export const userClient = {
    async allUsers(){
        let result = await userApiClient.get('/users')
        return result.data.user
    },

    async getUser(id:number){
        let result = await userApiClient.get(`/users/${id}`)
        return result.data.user
    }
}



