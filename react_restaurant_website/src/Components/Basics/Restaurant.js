import React, { useState } from 'react'
import './style.css'
import Menu from '../MenuApi'
import MenuCard from './MenuCard'
import Navbar from './Navbar'

const categoryList = [
  // ... -> spread operator
  ...new Set(Menu.map((currEle) => {
    return currEle.category
  })),
  'All'
]
// console.log('All categories=', categoryList);

const Restaurant = () => {
  // useState hooks
  const [menuData, setMenuData] = useState(Menu);
  // console.log(menuData);
  const [menuList, setMenuList] = useState(categoryList);

  const filterItems = (key) => {
    if (key === 'All') {
      return setMenuData(Menu);
    }

    const updatedList = Menu.filter((currElement) => {
        return (currElement.category === key)
    })
  
    return setMenuData(updatedList)
  }

  return(
    <>
      <Navbar filterItems={filterItems} menuList={menuList}></Navbar>
      <MenuCard menuData={menuData}/>
    </>
  )
}

export default Restaurant