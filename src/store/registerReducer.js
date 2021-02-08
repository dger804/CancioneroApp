import { cancioneroAppServer } from '../utils/apiaxios'

const USER_REGISTER_LOAD = 'USER_REGISTER_LOAD'
const USER_REGISTER_DONE = 'USER_REGISTER_DONE'
const USER_REGISTER_FAIL = 'USER_REGISTER_FAIL'

export function regUser(email, password){
  return async function(dispatch) {
    dispatch({ type: USER_REGISTER_LOAD })
    try{
      const { data: { token } } = await cancioneroAppServer({
        method: 'POST',
        url: 'users',
        data: { email, password }
      })
      sessionStorage.setItem('token', token);
      dispatch({ type: USER_REGISTER_DONE })
    }catch({ response: {data} }){
      dispatch({ type: USER_REGISTER_FAIL, payload: data.message });
    }
  }
}
const initialState = {
  errorReg: null,
  register: false,
  loading: false,
  userTypeR: ""
}
function registerReducer(state = initialState, action){
  switch(action.type){
    case USER_REGISTER_DONE:
      return{
        ...state,
        loading: false,
        register: true,
        userTypeR: "user"
      }
    case USER_REGISTER_LOAD:
      return{
        ...state,
        loading: true,
      }
    case USER_REGISTER_FAIL:
      return{
        ...state,
        loading: false,
        errorReg: action.payload
      }
    default:
      return state  
  }
}
export default registerReducer;
