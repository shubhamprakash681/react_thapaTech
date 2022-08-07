import React, { useState } from 'react'

const UseState = () => {
    const initialData = 20;
    const [myNum, setMyNum] = useState(initialData)

  return (
    <>
        <div className="center_div">
            {/* <p>Using useState()</p> */}
            <p>{myNum}</p>
            <div className="button2" onClick={() => {return setMyNum(myNum+1)}}>
                <span></span>
                <span></span>
                <span></span>
                Increment
            </div>

            <div className="button2" onClick={() => {
                    return myNum > 0 ? setMyNum(myNum-1) : setMyNum(0);
                }}>
                <span></span>
                <span></span>
                <span></span>
                Decrement
            </div>
        </div>
    </>
  )
}

export default UseState