import React from 'react'

const People = ({item}) => {
  const {name,title,quote,image}=item
//   let position= "nextSlide"
//   if(positionIndex===index){
//     position="activeSlide"
//   }
//   if(positionIndex===index -1 ||(index === 0 && positionIndex===people.length-1)){
//     position="lastSlide"
//   }
  return (
    <article className={position} >
        <img src={image} alt={name}  className='person-img'/>
        <h4>{name}</h4>
        <p className='title'>{title}</p>
        <p className='text'>{quote}</p>
    </article>
  )
}

export default People