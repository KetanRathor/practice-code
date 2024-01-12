import React from 'react'

const MenuCard = ({menuData}) => {
    //console.log(menuData);
  return (
    <>
    <section className="main-card--container">
    {menuData.map((curElem)=>{
        const {id, name, category, image, description} = curElem;
        return(
            <>
            <div className="card-container" key = {id}>
            <div className="card">
              <div className="card-body">
                <span className="card-number card-circle subtle">{id}</span>
                <br/>
                <span className="car-author subtle">{category}</span>
                <h2 className="card-title"> {name} </h2>
                <span className="Card-discription subtle">
                {description}
                </span>
                <div className="card-read"></div>
              </div>
              <img 
              src={image} 
              alt="images" 
              className="card-media"
              />
              <span className="card-tag subtle">order Now</span>
            </div>
          </div>
          </>

        );
    })}
    </section>
    
       
    </>
  )
}

export default MenuCard