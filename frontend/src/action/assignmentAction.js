
import api from "../Utility/api";
import { toast } from 'react-toastify';
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
    // GET_SECTION_REQUEST,
 } from "../constrants/ATSConstrants";



export const getAssignmentDetails = () => async (dispatch) => {
    try {
      dispatch({ type: GET_ASSIGNMENT_REQUEST });
  
      const {data} = await api.get("assignments/assignmentDetails"); // Adjust the endpoint if necessary
      
      dispatch({
        type: GET_ASSIGNMENT_SUCCESS,
        payload: data,
      });
  
    } catch (error) {
      console.log("error");
      
      dispatch({
        type: GET_ASSIGNMENT_FAIL,
        payload: error.response?.data?.message || error.message,
      });
    }
  };

export const loadAssignment = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_ASSIGNMENT_REQUEST });

    const {data} = await api.get("assignments/assignmentDetails"); // Adjust the endpoint if necessary
    
    dispatch({
      type: LOAD_ASSIGNMENT_SUCCESS,
      payload: data,
    });

  } catch (error) {
    console.log("error");
    
    dispatch({
      type: LOAD_ASSIGNMENT_FAIL,
      payload: error.response?.data?.message || error.message,
    });
  }
};

export const getSectionDetails = () => async (dispatch) => {
  try {
    dispatch({ type: GET_SECTION_REQUEST });

    const {data} = await api.get("assignments/sectionDetails"); // Adjust the endpoint if necessary
    
    dispatch({
      type: GET_SECTION_SUCCESS,
      payload: data,
    });

  } catch (error) {
    console.log("error");
    
    dispatch({
      type: GET_SECTION_FAIL,
      payload: error.response?.data?.message || error.message,
    });
  }
};

export const getStudentWorkDetails = () => async (dispatch) => {
  try {
    dispatch({ type: GET_WORK_REQUEST });

    const {data} = await api.get("assignments/studentWorkDetails"); // Adjust the endpoint if necessary

    dispatch({
      type: GET_WORK_SUCCESS,
      payload: data,
    });

  } catch (error) {
    console.log("error");
    
    dispatch({
      type: GET_WORK_FAIL,
      payload: error.response?.data?.message || error.message,
    });
  }
};