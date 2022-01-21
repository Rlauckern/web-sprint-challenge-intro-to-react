import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled, { keyframes } from 'styled-components';
import './App.css';
import Character from './components/Character';

const kf = keyframes`
  50% {
    transform: scale(2.3);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }`

  const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  border: 3px solid #0DA85A;

  h2 {
    color: orange;
    border: 2px red;
  }
  h3 {
    color: #0DA85A;
  }

  transform: scale(2); // start of animation
  opacity: 0; // start of animation;
  animation: ${kf} 2s ease-in-out forwards;
`

const App = () => {
  const [charData, setCharData] = useState([]);
 
  useEffect(() => {
    const fetchData = ()  => {
      axios.get('https://swapi.dev/api/people')
      .then((res) => {
        console.log(res.data)
        setCharData(res.data);  
      }).catch(err => {
        console.error(err);
      })
    }
    fetchData();
  }, [])
console.log(charData[0]);


  
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <StyledApp className="App">
      <h1 className="Header">Characters</h1>
      {
        charData.map(char => {
          return <Character info={char} key={char.name}/>
        })
      }
     
      

    </StyledApp>
  );
}

export default App;
