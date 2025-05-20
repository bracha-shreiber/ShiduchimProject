import { useReducer } from "react";
import { Action, User } from "../../types/user";

const Reducer = () => {
    const initialState: User = {
        email: "",
        passwordHash: "",
        username:"",
        id: 0
    }
    const userReducer = (state: User, action: Action): User => {
        switch (action.type) {
            case "LOGIN":
                return { ...state, ...action.data }
            case "REGISTER":
                return {...state,...action.data}
            case "LOGOUT":
                return {} as User
            case "UPDATE":
                return { ...state, ...action.data }
            default:
                return state
        }
    }
    const [user, userDispatch] = useReducer(userReducer, initialState);
    return { user, userDispatch };
}
export default Reducer;
