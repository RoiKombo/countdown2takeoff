import React,  { useState, useEffect } from 'react';
import Styled from 'styled-components';
import moment from 'moment';

const Container = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const MyButton = Styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    cursor: pointer;
    color: white;
    background-color: var(--buttonRed);
    width: 263px;
    height: 57px;
    margin-bottom: 5px;
    font-size: var(--heading-2);
    border-radius: 13px;
    :hover{
    background-color: var(--darkerRed);
    transition: background-color 0.25s ease;
    }
    `

const CountDownDisplay = Styled.div`
    font-size: var(--heading-1);
    background: hsl(0,0%,90%,0.3);
    padding: 10px;
    border-radius: 22px;
    margin: 0 0 20px 0;   
`

export const Counter = (prop) => {
    const {title, time} = prop;
    const [counterTime, setCounterTime] = useState(time)

    
    useEffect(() => {
        let currentCount = counterTime;
        if (currentCount > 0){ setTimeout(() => setCounterTime(currentCount - 1), 1000);
        } else {
            window.alert('You missed the last rocket to mars!')
        }
 
    }, [counterTime]);
    
    const resetCount = () => {
        // window.clearTimeout()
        setCounterTime(time)
        console.log('counterTime',counterTime)
        
    }
    return (
        <Container>
        <h4>{title}</h4>
            <CountDownDisplay>{counterTime}</CountDownDisplay>
            <MyButton onClick={resetCount}>Reset timer</MyButton>
        </Container>
    )
}

