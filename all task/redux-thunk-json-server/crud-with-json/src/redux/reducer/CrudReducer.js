import { use } from "react";

const initialState = {
  users: [],
  single: null
};
const CrudReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        users: [...state.users, action.payload],
      };

    case "VIEW_USER":
      return {
        ...state,
        users: action.payload
      }

    case "DELETE_USER":
      const deletid = state.users.filter((val) => val.id !== action.payload)
      return {
        ...state,
        users: deletid
      }
    case "EDIT_USER":
   
      return {
        ...state,
        single: action.payload
      }
    case "UPDATE_USER":
     const up = state.users.map((val) => {
        if (val.id === action.payload  ) {
          return action.payload
        }
        return val
      })
      return {
        ...state,
        users: up
      } 
    default:
      return state;
  }

};

export default CrudReducer;
