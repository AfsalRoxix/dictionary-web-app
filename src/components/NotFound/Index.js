import React from 'react'
import './NotFound.css'
import sad from '../../assets/images/sad.svg'

const Index = () => {
  return (
    <div className='not-found'>
        <img src={sad} alt='sad' className='not-found__emoji'/>
        <h2 className='not-found__title'>No definitions found</h2>
        <p className='not-found__description'>
            Sorry pal, we couldn't find definitions for the word you are looking for. You can try again later time or head to web instead.
        </p>
    </div>
  )
}

export default Index