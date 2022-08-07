import React from 'react'


const Navbar = ({ filterItems, menuList }) => {
  return (
    <>
        <nav className='navbar'>
            <div className="btn-group">
                {// js object
                    menuList.map((catName) => {
                        return (
                            <>
                                <button className='btn-group__item' onClick={() => filterItems(catName)}>{catName}</button>
                            </>
                        )
                    })
                }
            </div>
        </nav>
    </>
  )
}

export default Navbar