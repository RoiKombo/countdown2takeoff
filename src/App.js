import React from 'react';
import Styled, { keyframes } from 'styled-components';
import './styles.css';
import { Counter } from './components/Counter'
import rocket from './images/rocket.png';
import hero from './images/hero.png';


const Container = Styled.div`
  display: flex;
  justify-content: center;
  background-image: url('background.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  /* background-size: 100%; */
  width: 100vw;
  height: 100vh;
  @media (max-width: 950px){
    height: auto;
  }
`
const Column = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1000px;
`
const SideBySide = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
  width: 100%;
  @media (max-width: 950px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`
const RotateRocket = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(-100deg);
  }
  100% {
    transform: rotate(0deg);
  }
`
const Rocket = Styled.img`
  margin-top: 100px;
  width: 130px;
  animation: 2s ${RotateRocket} ease infinite;
`
const Hero = Styled.img`
  height: 220px;
`
const Txt = Styled.div`
  width: 410px;
`
const Header = Styled.h2`
  margin-bottom: 5px;
  color: var(--lightBlue);
  @media (max-width: 950px){
    display: flex;
    justify-content: center;
    width: auto;
    margin: 0 auto;
}
  @media (max-width: 700px){
    font-size: 1.953rem;
}`
const SubHeader = Styled.h4`
  margin-top: 5px;
  @media (max-width: 950px){
  margin: 5px 5px;
  }
  @media (max-width: 700px){
    font-size: 1.25rem;
}
`

function App() {
  return (
    <Container>
      <Column>
        <Rocket src={rocket} alt='rocket' />
          <SideBySide>
            <Txt>
              <Header>Get your seat to mars!</Header>
              <SubHeader>Earth is doomed, but don't worry! The last rocket is leaving for mars soon, so hurry up and book your flight!</SubHeader>
            </Txt>
          <Hero src={hero} alt='hero' />
          </SideBySide>
          <SideBySide>
            <div>
              
              <Counter time={240} title="Countdown to Boarding"/>
            </div> 
            <div>
              
            <Counter time={300} title="Countdown to Engine egnition"/>
            </div> 
            <div>
              
              <Counter time={360} title="Countdown to Lift off"/>
            </div> 
        </SideBySide>
      </Column>
    </Container>
  );
}

export default App;
