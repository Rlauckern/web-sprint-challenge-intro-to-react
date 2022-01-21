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

    :hover {
      color: #7e05f7;
  }
  
  }
  h3 {
    color: #0DA85A;

    :hover {
      color: #4491e3;
    }
  }
  .App {
    text-align: center;
  }
  .Header {
    color: #443e3e;
    text-shadow: 5px 5px 5px #fff;

    :hover {
      color: #a60889;
    }
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
