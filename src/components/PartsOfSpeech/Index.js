import React from 'react'
import PartOfSpeech from '../PartOfSpeech/Index'

const Index = ({meanings}) => {
  console.log(meanings)

  const items = []
  const jsxContent = Object.keys(meanings).forEach((PartOfSpeech)=>{
    const item = meanings[PartOfSpeech]
    const singleItem = {
      title:PartOfSpeech,
      content:item,
    }
    items.push(singleItem)
  })

  return (
    <div className='parts-of-speech'>
      {items && items.length > 0 && (
        <>
          {items.map((item,index)=>{
            return <PartOfSpeech key={index} item={item}/>
          })}
        </>
      )}
    </div>
  )
}

export default Index