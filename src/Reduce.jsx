import { useReducer } from "react";

import ReactDOM from "react-dom/client"; 

const dic = [
    {
      id: 1,
      title: "Todo 1",
      complete: false,
    },
    {
      id: 2,
      title: "Todo 2",
      complete: false,
    },
  ];  

  const reducer=(state,action)=>{
    switch(action.type){
        case "complete":
            return state.map((todo) => {
                if (todo.id === action.id) {
                  return { ...todo, complete: !todo.complete };
                } else {
                  return todo;
                }
              });  

        default :
        return state
    }
  }


  function Reduce() {
    const [todos, dispatch] = useReducer(reducer, initialTodos);
  
    const handleComplete = (element) => {
      dispatch({ type: "COMPLETE", id: todo.id });
    };
  
    return (
      <>
        {todos.map((element) => (
          <div key={element.id}>
            <label>
              <input
                type="checkbox"
                checked={element.complete}
                onChange={() => handleComplete(element)}
              />
              {element.title}
            </label>
          </div>
        ))}
      </>
    );
  }
  

  export default Reduce