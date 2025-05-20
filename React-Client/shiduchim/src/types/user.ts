export type User={
    id:number;
    email:string;
    passwordHash:string;
    username?:string;
    address?:string;
    phone?:string;
}
export type Action={
    type:string;
    data:Partial<User>;
}
export type UserLogin={
    email:string;
    password:string;
}
const userReducer=(state:User, action:Action):User|undefined=>{
   switch (action.type) {
    case "login":
        return {...state,...action.data};
    case "update":
        state = {...state,...action.data};
        return state;
        case "delete":
            
    default:
        return state;
   }
}

export default userReducer;