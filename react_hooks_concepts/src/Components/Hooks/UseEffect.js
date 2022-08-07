import React, {useEffect, useState} from 'react'

const UseEffect = () => {
    const initialData = 0;
    const [myNum, setMyNum] = useState(initialData);

    useEffect(() => {
        console.log('HI')
        document.title = `Chats(${myNum})`;
    })

    return (
        <>
            <div className="center_div">
                {/* <p>Using useEffect()</p> */}
                <p>{myNum}</p>
                <div className="button2" onClick={() => {return setMyNum(myNum+1)}}>
                    <span></span>
                    <span></span>
                    <span></span>
                    Button
                </div>
            </div>
        </>
  )
}

export default UseEffect