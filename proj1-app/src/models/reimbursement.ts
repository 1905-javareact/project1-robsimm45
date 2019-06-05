import { User } from "./users";
import { ReimbursementStatus } from "./reimbursementStatus";
import { ReimbursementType } from "./reimbursementType";

export class Reimbursement{
    reimbursementId: number // primary key
    author: string  // foreign key -> User, not null
    amount: number  // not null
    dateSubmitted: number // not null
    dateResolved: number // not null
    description: string // not null
    resolver: string // foreign key -> User
    status: string // foreign key -> ReimbursementStatus, not null
    type: string // foreign key -> ReimbursementType


    addAuthor(user:User){
      this.author = user.firstName + ' ' + user.lastName
    }

    addResolver(user:User){
      this.resolver = user.firstName + ' ' + user.lastName
    }

    addStatus(status:ReimbursementStatus){
      this.status = status.status
    }

    addType(type:ReimbursementType){
      this.type = type.type
    }

    constructor(reimId:number = 0, amount = 0, dateSubmitted = 0, dateResolved = 0, description = '', resolver = ''){
      this.reimbursementId = reimId
      this.amount = amount
      this.dateSubmitted = dateSubmitted
      this.dateResolved = dateResolved
      this.description = description
      this.resolver = resolver
    }

  }