import axios from 'axios'
import { loginFailure, loginStart, loginSuccess } from "../userRedux"

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await axios.post('http://localhost:5000/api/user/login', user);
        dispatch(loginSuccess(res.data.user))
        localStorage.setItem('token', res.data.token)
        // console.log(res.data.status);
        localStorage.setItem('user', JSON.stringify(res.data.user))
    } catch (error) {
        dispatch(loginFailure())
    }
}