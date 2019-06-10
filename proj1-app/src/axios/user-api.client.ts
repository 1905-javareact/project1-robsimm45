import Axios from 'axios'

const userApiClient = Axios.create({
    baseURL: 'http://localhost:9050/users',
    headers: {
        'content-type': 'application/json'
    },
    withCredentials : true
})

export const userClient = {
    async allUsers(){
        let result = await userApiClient.get('')
        console.log(result.data)
        return result.data
    },

    async getUser(id:number){
        let result = await userApiClient.get(`/${id}`)
        return result.data
    },

    async updateUser(user){
        let result = await userApiClient.patch('/', JSON.stringify(user))
        return result.data
    }
}



