import Axios from 'axios'
import updateReimComponent from '../components/reimbursementcomponent/updatereimbursementcomponent/update-reim.component';

const reimApiClient = Axios.create({
    baseURL: 'http://localhost:9050/reimbursement',
    headers: {
        'content-type': 'application/json'
    },
    withCredentials : true
})

export const reimClient = {
    async reimByStatus(status){
        let result = await reimApiClient.get(`/status/${status}`)
        console.log(result.data)
        return result.data
    },

    async reimByAuthor(authorID){
        let result = await reimApiClient.get(`/author/userId/${authorID}`)
        console.log(result.data)
        return result.data
    },

    async updateReim(reim){
        let result = await reimApiClient.patch('/', JSON.stringify(reim))
        return result.data
    },

    async submitReim(reim){
        let result = await reimApiClient.post('/', JSON.stringify(reim))
        return result.data
    }    
}