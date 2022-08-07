import React, { useEffect, useState } from 'react'

const Todo = () => {
    const getLocalData = () => {
        const savedItems = localStorage.getItem('todoAppData')
        if (savedItems) {
            return JSON.parse(savedItems);
        }
        return [];
    }

    const [inputData, setInputData] = useState('');
    const [items, setItems] = useState(() => getLocalData());
    const [isEditItem, setIsEditItem] = useState('');
    const [toggleButton, setToggleButton] = useState(false);
    
    const addItem = () => {
        if (!inputData) {
            alert('Please fill the data');
        } else if (inputData && toggleButton) {
            setItems(
                items.map((currElem) => {
                    if (currElem.id === isEditItem) {
                        return {...currElem, name:inputData};
                    }else {
                        return currElem;
                    }
                })
            )
            setInputData('')
            setIsEditItem(null)
            setToggleButton(false)
        } else {
            const newData = {
                id: new Date().getTime().toString(),
                name: inputData
            }
            setItems([...items, newData]);
            setInputData('')
        }
    }

    const deleteItem = (id) => {
        const updatedItems = items.filter((currElem) => {
            return currElem.id !== id;
        })

        setItems(updatedItems);
    }

    const removeAll = () => {
        return setItems([]);
    }

    const editItem = (id) => {
        const itemToBeEdited = items.find((currElm) => {
            return currElm.id === id;
        });

        setInputData(itemToBeEdited.name)
        setIsEditItem(id)
        setToggleButton(true)
    }


    // storage implementation
    useEffect(() => {
        localStorage.setItem('todoAppData', JSON.stringify(items));
    }, [items]);

  return (
    <>
        <div className="main-div">
            <div className="child-div">
                <figure>
                    <img src="./images/logo.svg" alt="LOGO" />
                    <figcaption>Add Your TODO List Here 👇</figcaption>
                </figure>

                <div className="addItems">
                    <input 
                    className='form-control' 
                    type="text" 
                    placeholder='✒️ Write here to add' 
                    value={inputData}
                    onChange={ (event) => {
                        setInputData(event.target.value)
                    } }
                    />

                    { toggleButton ? <i className="fa-solid fa-pen-to-square" onClick={ addItem }></i> : <i className="fa-solid fa-plus" onClick={ addItem }></i> }
                </div>

                <div className="showItems">
                        { // puttig as js object
                            items.map((currElement) => {
                                return (
                                    <div className="eachItem" key={currElement.id} >
                                        <h3>{ currElement.name }</h3>
                                        <div className="todo-btn">
                                            <i className="fa-solid fa-pen-to-square"
                                            onClick={() => editItem(currElement.id)}></i>

                                            <i className="fa-solid fa-trash-can" 
                                            onClick={() => deleteItem(currElement.id)}></i>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    
                </div>

                <div className="showItems">
                    <button className='btn effect04' data-sm-link-text='Remove All' onClick={() => removeAll()}>
                        <span>Check List</span>
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Todo