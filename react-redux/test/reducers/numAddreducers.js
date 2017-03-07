import {combineReducers} from "redux";
import {AddNum,SubNum} from "../actions/actions";


//这js主要判断传进来的任务对应的操作
export default function numAddreducers (state={number:0},action){

  switch (action.type) {
    case AddNum:
      return {number:state.number+1}
    case SubNum:
      return {number:state.number-1}
    default:
      return state
  }
}
