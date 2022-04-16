import './App.css';
import React, {useState } from 'react';
import url from './funk-style.mp3'

function App() {
  const [isShown, setIsShown] = useState(false);
  const [audio] = useState(new Audio(url));
  function handleShown(bool){
    if(bool === false){
     setIsShown(false)
      audio.pause()
    }
   else{
      setIsShown(true)
      audio.play()
    }
  }
  return (
    <div className="App" id={(isShown ? 'night' : 'day')}>
      <h1 className="content"  onMouseEnter={() => handleShown(true)}
        onMouseLeave={() => handleShown(false)}>{(isShown ? 'Boom Boom Boom' : 'Entrée gratuite')}</h1>
    </div>
  );
}

export default App;
