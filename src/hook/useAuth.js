import {useContext} from "react";
import {AuthContext} from "../hoc/AuthPovider";


export const useAuth = () => {
    return useContext(AuthContext)
}