import React, { useState } from "react";
import "./Style.css";
import Menu from "./menuApi";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";

const uniqueList = [
  ...new Set(Menu.map((curElem)=>{
    return curElem.category;
   })
  ),
  "All",
];
console.log(uniqueList);
const Resturent = () => {
  const[menuData, setMenuData]  = useState(Menu);
  const[menuList, setMenuList] = useState(uniqueList)
  const filterItem = (category) =>{

    if (category==="All"){
      setMenuData(Menu);
      return;
    }
    const updatedList = Menu.filter((curElem)=>{
        return curElem.category === category;
    })
    setMenuData(updatedList);
  };
  return (
    <>

    {/* {
      Menu.map((item, key)=>{
        return(
        <>
         <div className="card-container">
      <div className="card">
        <div className="card-body">
          <span className="card-number card-circle subtle">1</span>
          <br/>
          <span className="car-author subtle">{item.category}</span>
          <h2 className="card-title"> {item.name} </h2>
          <span className="Card-discription subtle">
           {item.description}
          </span>
          <div className="card-read"></div>
        </div>
        <img src={item.image} alt="images" className="card-media"/>
        <span className="card-tag subtle">order Now</span>
      </div>
    </div> 
        </>
        )
      })
    } */}

    
    <Navbar filterItem = {filterItem} menuList = {menuList}/>
    <MenuCard menuData = {menuData}/> </>
  );
};

export default Resturent;