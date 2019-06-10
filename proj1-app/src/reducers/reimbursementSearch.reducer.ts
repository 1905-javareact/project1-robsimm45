import { ISearchedReimbursementState } from ".";
import { ReimTypes } from "../actions/reimbursement.action";
import { Reimbursement } from "../models/reimbursement";


const initialState:ISearchedReimbursementState = {
    foundReimbursements: [],
    errorMessage: ''
}

export const ReimbursementSearcherReducer = (state = initialState, action) => {
    switch(action.type){
        case ReimTypes.Found_Reimbursements:
            return{
                ...state,
                foundReimbursements: action.payload.found_Reimbursements
            }
        case ReimTypes.SucsessfulPush:
            return{
                ...state
            }
        case ReimTypes.Not_Found:
            return{
                ...state,
                errorMessage: 'Reimbursements not found'
            }
    }
    return state
}