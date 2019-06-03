export class Role{
    roleId: number // primary key
    roleUserID: number
    roleName: string // not null, unique
}