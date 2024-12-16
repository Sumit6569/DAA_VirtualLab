import {
    GET_TEACHER_REQUEST,
    GET_TEACHER_SUCCESS,
    GET_TEACHER_FAIL,
    
    SIGNUP_REQUEST, 
    SIGNUP_SUCCESS, 
    SIGNUP_FAIL, 

    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGIN_REQUEST,

    LOAD_TEACHER_REQUEST,
    LOAD_TEACHER_SUCCESS,
    LOAD_TEACHER_FAIL,

    CLEAR_ERRORS,
    LOGOUT_FAIL,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    AUTH_ERROR,
    
    FORGOTPASSWORD_REQUEST,
    FORGOTPASSWORD_SUCCESS,
    FORGOTPASSWORD_FAIL,

    GOOGLE_LOGIN_REQUEST,
    GOOGLE_LOGIN_SUCCESS,
    GOOGLE_LOGIN_FAIL,
    GET_ASSIGNMENT_REQUEST,
    GET_ASSIGNMENT_SUCCESS,
    GET_ASSIGNMENT_FAIL,
    
} from "../constrants/ATSConstrants"

const teacherReducer = (state = {teacher : {}}, action) => {
    switch (action.type) {
        case SIGNUP_REQUEST:
        case LOGIN_REQUEST:
        case LOGOUT_REQUEST:
        case GOOGLE_LOGIN_REQUEST:
        case LOAD_TEACHER_REQUEST:
        case FORGOTPASSWORD_REQUEST:
            return {
                ...state,
                loading : true,
                isAuthenticated: false,
            }

        case LOGIN_SUCCESS:
        case GOOGLE_LOGIN_SUCCESS:
        case LOAD_TEACHER_SUCCESS:
        case FORGOTPASSWORD_SUCCESS:
        case LOGOUT_FAIL:
            return {
                ...state,
                loading : false,
                isAuthenticated: true,
                teacher : action.payload
            };
        case SIGNUP_FAIL:
        case LOGIN_FAIL:
        case GOOGLE_LOGIN_FAIL:
        case FORGOTPASSWORD_FAIL:
            return {
                ...state,
                loading : false,
                isAuthenticated: false,
                teacher:null,
                error: action.payload,
            };

        case AUTH_ERROR:
        case SIGNUP_SUCCESS:
        case LOGOUT_SUCCESS:
            return {
                ...state,
                loading : false,
                isAuthenticated: false,
                teacher : action.payload
            };
        
        case LOAD_TEACHER_FAIL:
            return {
                ...state,
                loading : false,
                isAuthenticated: false,
                teacher:null,
                error: action.payload,
            }
        
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };
        
        case GET_TEACHER_REQUEST:
            return {
                ...state,
                loading : true,
            }
        
        case GET_TEACHER_SUCCESS:
            return {
                ...state,
                loading : false,
                teacher : action.payload
            }
        
        case GET_TEACHER_FAIL:
            return {
                ...state,
                loading : false,
                teacher : null,
                error : action.payload
        }
        
            
    
        default:
            return state;
    }
}

export const assignmentReducer = (state = {assignment : {}}, action) => {
    switch (action.type) {
     
        case GET_ASSIGNMENT_REQUEST:
            return {
                ...state,
                loading : true,
            }
        
        case GET_ASSIGNMENT_SUCCESS:
            return {
                ...state,
                loading : false,
                assignment : action.payload
            }
        
        case GET_ASSIGNMENT_FAIL:
            return {
                ...state,
                loading : false,
                // assignment : null,
                error : action.payload
        }
        
            
    
        default:
            return state;
    }
}
export default teacherReducer;