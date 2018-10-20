import { createStore } from 'redux';
const reducer = (state,action) =>{

  if(action.type === "GET_DATA"){
    return{
      ...state,
      title:action.title,
      url: action.url,
      display:action.display
    }
  }
  return state;
}
export default createStore(reducer,{url:'' });
