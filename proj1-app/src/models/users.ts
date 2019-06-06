import {Role} from './role'

export class User {
    userId: number // primary key
    username: string // not null, unique
    password: string // not null
    firstName: string // not null
    lastName: string // not null
    email: string // not null
    role: Role[] // not null

    addRoles(roles:Role){
      this.role.push(roles)
    }

    printRoles(){
      let result = ''
      for(let x of this.role){
        result += x.roleName + ', '
      }
      return result
    }

    constructor(userId:number = 0, username:string = '', password:string = '', firstName:string = '', lastName:string = '', email:string = '', roles:Role[] = []){
      this.userId = userId
      this.username = username
      this.password = password
      this.firstName = firstName
      this.lastName = lastName
      this.email = email
      this.role = roles
    }

    
}