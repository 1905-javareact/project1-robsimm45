import { Reimbursement } from "../models/reimbursement";
import { reimClient } from "../axios/reimbursement-api.client";

export const ReimTypes ={
    Found_Reimbursements: 'FOUND_REIM',
    SucsessfulPush: 'SUCSESS',
    Not_Found: 'NOT_FOUND'
}


export const obtainByAuthor = (authorId) => async (dispatch) => {
    try{
        let found:Reimbursement[] = await reimClient.reimByAuthor(authorId)

        if(found !== undefined){
            
            dispatch({
                payload:{
                    found_Reimbursements: found,
                    errorMessage: ''
                },
                type: ReimTypes.Found_Reimbursements
            })
    
        } else {
            dispatch({
                type: ReimTypes.Not_Found
            })
    
        }

    }catch(err){
        console.log(err)
    }
}

export const findReimbursementsByStatus = (status) => async (dispatch) => {
    try{
        let found:Reimbursement[] = await reimClient.reimByStatus(status)

        if(found !== undefined){
            
            dispatch({
                payload:{
                    found_Reimbursements: found,
                    errorMessage: ''
                },
                type: ReimTypes.Found_Reimbursements
            })
    
        } else {
            dispatch({
                type: ReimTypes.Not_Found
            })
    
        }

    }catch(err){
        console.log(err)
    }
}

export const updateReimbursement = (toUpdate) => async (dispatch) => {
    try{
        let found:Reimbursement[] = await reimClient.reimByStatus(toUpdate)

        if(found !== undefined){
            
            dispatch({
                type: ReimTypes.SucsessfulPush
            })
    
        } else {
            dispatch({
                type: ReimTypes.Not_Found
            })
    
        }

    }catch(err){
        console.log(err)
    }
}

export const submitReimbursement = (toSubmit) => async (dispatch) => {
    try{
        let found:Reimbursement = await reimClient.submitReim(toSubmit)

        if(found !== undefined){
            
            dispatch({
                type: ReimTypes.SucsessfulPush
            })
    
        } else {
            dispatch({
                type: ReimTypes.Not_Found
            })
    
        }

    }catch(err){
        console.log(err)
    }
}