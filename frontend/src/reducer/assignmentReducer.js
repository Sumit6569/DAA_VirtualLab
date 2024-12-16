import {
 GET_ASSIGNMENT_FAIL,
 GET_ASSIGNMENT_REQUEST,
 GET_ASSIGNMENT_SUCCESS,
 GET_SECTION_FAIL,
 GET_SECTION_REQUEST,
 GET_SECTION_SUCCESS,
 GET_WORK_FAIL,
 GET_WORK_REQUEST,
 GET_WORK_SUCCESS,
 LOAD_ASSIGNMENT_FAIL,
 LOAD_ASSIGNMENT_REQUEST,
 LOAD_ASSIGNMENT_SUCCESS,

}  from "../constrants/ATSConstrants.js"



const initialState = {
    assignment: {
      data: [],  // Initialize it as an empty array or any default value
    },
    loading: false,
    error: null,
  };


export const assignmentReducer = (state = {assignment : {}}, action) => {
    switch (action.type) {

        case LOAD_ASSIGNMENT_REQUEST:
            return {
                ...state,
                loading : true,
                isAuthenticated: false,
            }
        
            case LOAD_ASSIGNMENT_SUCCESS:
                return {
                    ...state,
                    loading : false,
                    isAuthenticated: true,
                    assignment : action.payload
                };
        case LOAD_ASSIGNMENT_FAIL:
            return {
                ...state,
                loading : false,
                isAuthenticated: false,
                assignment:null,
                error: action.payload,
            };
     
        case GET_ASSIGNMENT_REQUEST:
            return {
                ...state,
                loading : true,
                isAuthenticated: false,
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
                assignment : null,
                error : action.payload
        }
        
            
    
        default:
            return state;
    }
}

export const sectionReducer = (state = initialState, action) => {
    switch (action.type) {


     
        case GET_SECTION_REQUEST:
            return {
                ...state,
                loading : true,
            }
        
        case GET_SECTION_SUCCESS:
            return {
                ...state,
                loading : false,
                section : action.payload
            }
        
        case GET_SECTION_FAIL:
            return {
                ...state,
                loading : false,
                section : null,
                error : action.payload
        }
        
            
    
        default:
            return state;
    }
}

export const studentWorkReducer = (state = {studentWork : {}}, action) => {
    switch (action.type) {

        case GET_WORK_REQUEST:
            return {
                ...state,
                loading : true,
            }
        
        case GET_WORK_SUCCESS:
            return {
                ...state,
                loading : false,
                studentWork : action.payload
            }
        
        case GET_WORK_FAIL:
            return {
                ...state,
                loading : false,
                studentWork : null,
                error : action.payload
        }
    
        default:
            return state;
    }
}







   // case SIGNUP_REQUEST:
        // case LOGIN_REQUEST:
        // case LOGOUT_REQUEST:
        // case GOOGLE_LOGIN_REQUEST:
        // case LOAD_STUDENT_REQUEST:
        // case FORGOTPASSWORD_REQUEST:
        //     return {
        //         ...state,
        //         loading : true,
        //         isAuthenticated: false,
        //     }

        // case LOGIN_SUCCESS:
        // case GOOGLE_LOGIN_SUCCESS:
        // case LOAD_STUDENT_SUCCESS:
        // case FORGOTPASSWORD_SUCCESS:
        // case LOGOUT_FAIL:
        // case STUDENT_LOADED:
        //     return {
        //         ...state,
        //         loading : false,
        //         isAuthenticated: true,
        //         student : action.payload
        //     };
        // case SIGNUP_FAIL:
        // case LOGIN_FAIL:
        // case GOOGLE_LOGIN_FAIL:
        // case FORGOTPASSWORD_FAIL:
        //     return {
        //         ...state,
        //         loading : false,
        //         isAuthenticated: false,
        //         student:null,
        //         error: action.payload,
        //     };

        // case AUTH_ERROR:
        // case SIGNUP_SUCCESS:
        // case LOGOUT_SUCCESS:
        //     return {
        //         ...state,
        //         loading : false,
        //         isAuthenticated: false,
        //         student : action.payload
        //     };
        
        // case LOAD_STUDENT_FAIL:
        //     return {
        //         ...state,
        //         loading : false,
        //         isAuthenticated: false,
        //         student:null,
        //         error: action.payload,
        //     }
        
        // case CLEAR_ERRORS:
        //     return {
        //         ...state,
        //         error: null,
        //     };
        