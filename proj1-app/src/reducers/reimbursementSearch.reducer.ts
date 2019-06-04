import { Reimbursement } from "../models/reimbursement";
import { ISearchedReimbursementState } from ".";


const initialState:ISearchedReimbursementState = {
    foundReimbursements: [],
    errorMessage: ''
}

export const ReimbursementSearcherReducer = (state = initialState, action) => {

}