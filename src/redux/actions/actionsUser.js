import { reduxGetUser } from "../../service/auth/get_user"
import { setUser } from "../reducers/auth/authLogin"

const actionsUser = () => async (dispatch) => {
    return reduxGetUser().then((result) => {
        dispatch(setUser(result.data.data))
    })
    .catch((err)=>{
        
    })
} 

export default actionsUser