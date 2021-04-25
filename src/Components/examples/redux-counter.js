import { createStore } from "redux"


const initialState = {
    count: 0,
  
  }
  
  // REDUCERS
  // Blogs, auth => username, islogged
  
  const counterReducer = (state = initialState, action) => {
    switch (action.type) {
      case "INCREMENT":
        const incrementBy = typeof action.incrementBy === "number" ? action.incrementBy : 1;
        return {
          count: state.count + incrementBy
        }
  
      case "DECREMENT":
        return {
          count: state.count - 2
        }
  
      case "RESET":
        return {
          count: 0
        }
  
      default:
        return state;
    }
  
  }
  
  
  
  const store = createStore(counterReducer);
  
  
  store.subscribe(()=>{
  console.log(store.getState());
  })
  
  // ACTIONS (object)
  store.dispatch(
    {
      type: "INCREMENT",
      incrementBy: 10
    }
  )
  
  store.dispatch(
    {
      type: "INCREMENT",
    }
  )
  
  
  
  // DISPATCH
  