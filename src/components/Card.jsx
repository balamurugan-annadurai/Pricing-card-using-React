import React from 'react'

//function component to create card
function Card(props){

  function createList(object){ //function to create list
    const lists = object.card.features.map((feature,i) => (
      <li key={i} className={(feature.isIncluded)? "" : "notIncluded"}><span className='span'>{(feature.isIncluded)? <i className='bx bx-check'></i> : <i className='bx bx-x'></i>}</span>{feature.text}</li>
    ))
    
    return lists;
  }

  function btnHighLight(object){//function to add class to button
     const btnClass = (object.card.btn) ? "btn btnHighLight" : "btn";
     return btnClass;
  }

  return (
    <div className="card">
       <h3 className='tag'>{props.card.tag}</h3>
       <h1 className='price'>{props.card.price}</h1>
       <hr className='line' />
       <ul>
       {createList(props)}
       </ul>
       <button className={btnHighLight(props)}>BUTTON</button>
    </div>
  )
}

export default Card