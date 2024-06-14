import React from "react";
import "./Pronounce.css";

import PlayButton from "./PlayButton.js";

let audio = null

const Index = ({ phonetics, word, phonetic }) => { 
  const pronounce = () => {
    let foundPhonetic = null
    foundPhonetic = phonetics.find((phonetic)=>
      phonetic.audio && phonetic.text ? phonetic : null
    )

    if(!foundPhonetic){
      return
    }

    if(audio !== null){
      // pause the curr audio playback and reset currentTime property
      audio.pause()
      audio.currentTime = 0
    }

    // create and play new audio
    audio = new Audio(foundPhonetic.audio)
    audio.play()
  }
  return (
    <div className="pronounce">
      <div className="pronounce_test-box">
        <h1 className="pronounce_title">{word}</h1>
        {phonetic && <span className="pronounce_text">{phonetic}</span>}
      </div>

      <div className="pronounce_audio-box">
        {phonetics && phonetics.length > 0 && (
          <PlayButton onClick={pronounce}/>

        )}
      </div>
    </div>
  );
};

export default Index;
