import React, { useEffect, useState } from 'react'
import data from "./data/data"
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

const App = () => {
  const [people, setPeople] = useState(data)
  const [index, setIndex] = useState(0)

useEffect(()=>{
  const lastIndex=people.length -1;

  if(index <0){
    setIndex(lastIndex)
  }
  if(index >lastIndex){
    setIndex(0)
  }
},[index,people])

useEffect(()=>{
  let slider=setTimeout(() => {
    setIndex(index + 1)
  }, 3000);
  return () => clearInterval(slider)
},[index])

  return (
    <section className='section'>
      <div className="title">
        <h4> reviews</h4>
      </div>
      <div className="section-center">
     
      {
        people.map((item,positionIndex)=>{
          const {id,name,title,quote,image}=item
          let position= "nextSlide"
          if(positionIndex===index){
            position="activeSlide"
          }
          if(positionIndex===index -1 ||(index=== 0 && positionIndex===people.length-1)){
            position="lastSlide"
          }
          return (
            <article className={position} key={id}>
            <img src={image} alt={name} className='person-img' />
            <h4>{name}</h4>
            <p className='title'>{title}</p>
            <p className='text'>{quote}</p>
          </article>
          )
        })
      }
        <button className='prev' onClick={()=>setIndex(index-1)}><FiChevronLeft /></button>
        <button className='next' onClick={()=>setIndex(index+1)}> <FiChevronRight /></button>
      </div>
    </section>
  )
}

export default App