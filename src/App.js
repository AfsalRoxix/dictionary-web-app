import { useState } from 'react';
import './App.css';
import SearchBox from './components/SearchBox/Index'
import TopBar from './components/TopBar/Index'
import Main from './components/Main/Index'

function App() {
  const [idle,setIdle] = useState(true)
  const [searching,setSearching] = useState(false)
  const [notFound,setNotFound] = useState(false)
  const [content,setContent] = useState('')

  const searchHandler = async(searchedWord) => {
    setSearching(true)
    setIdle(false)

    const searchUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchedWord}`
    const response = await fetch(searchUrl)
    const jsonResponse = await response.json()
    setSearching(false)

    console.log(jsonResponse)

    if(jsonResponse.title === 'No Definitions Found'){
      setNotFound(true)
    }else{
      setNotFound(false)
      // content here
      setContent(jsonResponse[0])
    }

  }

  const reset = () => {
    setIdle(false)
    setSearching(false)
    setNotFound(false)
    setContent('')
  }

  return (
    <div className="container">
      <TopBar />
      <SearchBox onSearch={searchHandler} onTyping={reset}/>
      <Main idle={idle} searching={searching} notFound={notFound} content={content}/>
    </div>
  );
}

export default App;
