import React,{useState,useRef,useEffect} from 'react'
import './SearchBox.css'

const Index = ({onSearch,onTyping}) => {
  const [submitted,setSubmitted] = useState(false)
  const [searchedWord,setSearchedWord] = useState('')

  const inputRef = useRef()

  function submithandler(e){
    e.preventDefault()

    if(searchedWord ===''){
      setSubmitted(true)
      return
    }

    onSearch(searchedWord)
  }

  const handleSearch = (word) => {
    setSearchedWord(word)
    onTyping(word)
  }

  useEffect(()=>{
    inputRef.current.focus()
  },[])
  return (
    <form className={`search-box ${submitted ? 'submitted' : ''}`} onSubmit={submithandler}>
      <input ref={inputRef} type='text' placeholder='Search for word' className={`search-box_input ${searchedWord ? 'invalid' : ''} `} onChange={(e)=>handleSearch(e.target.value)}/>
      <span className='error-message'>Whoops, can't be empty</span>
      <button type='submit' className='btn-search'>
        0
      </button>
    </form>
  )
}

export default Index