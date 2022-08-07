import React, { useReducer } from 'react'


// note:- useReducer is preffered over useState for bigger projects

const reducer = (state, action) => {
    if (action.type === 'INCR') {
        state = state + 1;
    } else if (action.type === 'DECR') {
        if (state > 0) {
            state--;
        }
    }

    return state;
}

const UseReducer = () => {
    const initialData = 10;
    // const [myNum, setMyNum] = useState(initialData);

    const [state, dispatch] = useReducer(reducer, initialData)

    return (
        <>
            <div className="center_div">
            {/* <p>Using useReducer()</p> */}
            <p>{state}</p>
            <div className="button2" onClick={() => dispatch({type: 'INCR'})}>
                <span></span>
                <span></span>
                <span></span>
                Increment
            </div>

            <div className="button2" onClick={() => dispatch({type: 'DECR'})}>
                <span></span>
                <span></span>
                <span></span>
                Decrement
            </div>
        </div>
        </>
  )
}

export default UseReducer