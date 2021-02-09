import { cancioneroAppServer } from '../utils/apiaxios'

const USER_LOGIN_LOAD = 'USER_LOGIN_LOAD'
const USER_LOGIN_DONE = 'USER_LOGIN-DONE'
const USER_LOGIN_FAIL = 'USER_LOGIN-FAIL'

export function userLogin( email, password ){
  return async function( dispatch ){
    dispatch({ type: USER_LOGIN_LOAD })
    try{
      const { data: { token } } = await cancioneroAppServer({
        method: 'POST',
        url: '/users/login',
        data: { email, password }
      });
      sessionStorage.setItem('token', token)
      dispatch({ type: USER_LOGIN_DONE })
    }catch({ response: {data} }){
      dispatch({ type: USER_LOGIN_FAIL, payload: data })
    }
  }
}
const initialState = {
  errorLog: null,
  login: false,
  loading: false,
  userType: ""
}
function loginReducer( state = initialState, action ){
  switch(action.type){
    case USER_LOGIN_DONE:
      return{
        ...state,
        login: true,
        loading: false,
        userType: "user"
      }
    case USER_LOGIN_LOAD:
      return{
        ...state,
        loading: true
      }
    case USER_LOGIN_FAIL:
      return{
        ...state,
        loading: false,
        errorLog: action.payload
      }
    default:
      return state
  }
}
export default loginReducer;