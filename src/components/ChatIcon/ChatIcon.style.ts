import styled, { css, keyframes } from 'styled-components'

const eyeAnimation = keyframes`
  0%, 100% {left:25px;}
  50% {left:35px;}
`

const listAnimation = keyframes`
  0%, 100% {left:-5px;}
  50% {left:5px;} 
`

export const IconContainer = styled.div(() => css`
  scale: 0.25;
  border: 6px solid #111;
  border-radius: 200px;
`)

export const ChatIcon = styled.div(() => css`
  body {
    background: #e6e7e9;
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
  }

  .r2d2 {
    position: relative;
    width: 300px;
    height: 300px;
    justify-content: center;
    display: flex;
    flex-direction: column;
    z-index: 100;
  }

  .head {
    display: flex;
    justify-content: center;
    position: absolute;
    left: 93px;
    background: transparent;
    top: 52px;
    overflow: hidden;
    border: 7px solid #3a322f;
    height: 50px;
    width: 100px;
    border-radius: 100px 100px 0 0;
    z-index: 100;
  }
  
  .eye {
    background: #0f74bf;
    width: 40px;
    height: 35px;
    display: flex;
    position: absolute;
    top: -3px;
    left: 30px;
    -webkit-animation: ${eyeAnimation} 2s infinite;
    justify-content: center;
    align-items: center;
    border-radius: 0 0 10px 10px;
    z-index: -1;
  }

  .circle-1 {
    position: relative;
    background: #3a322f;
    border-radius: 100%;
    width: 25px;
    height: 25px;
  }

  .circle-2 {
    position: absolute;
    background: #FFF;
    border-radius: 100%;
    width: 10px;
    height: 10px;
    left: 4px;
    top: 5px;
  }

  .circle-3 {
    position: absolute;
    background: #FFF;
    border-radius: 100%;
    width: 5px;
    height: 5px;
    right: 4px;
    bottom: 6px;
  }
          
  .list1 {
    position: absolute;
    height: 7px;
    width: 100%;
    display: flex;
    top: 37px;
    left: 0;
    -webkit-animation: ${listAnimation} 2s infinite;
    z-index: -1;
  }

  .item {
    background: #0f74bf;
    margin-left: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15px;
    height: 100%;
    border-radius: 10px;
  }

  .circle {
    background: #c93409;
    border-radius: 100px;
    width: 5px;
    height: 5px;
  }
       
  .body2 {
    position: absolute;
    left: 93px;
    top: 114px;
    background: #f2f2f2;
    border: 7px solid #3a322f;
    border-top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 90px;
    width: 100px;
    margin: 0 auto;
    border-radius: 0 0 30px 30px;
  }

  .list2 {
    width: 50px;
  }

  .item2 {
    background: #0f74bf;
    margin-top: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 6px;
    border-radius: 10px;
  }
       
  .oval {
    background: #3a322f;
    margin-top: 8px;
    border-radius: 50px;
    height: 35px;
    width: 12px;
  }

    
  .arm-1 {
    background: #f2f2f2;
    position: absolute;
    left: 79px;
    top: 121px;
    width: 45px;
    height: 98px;
    border-radius: 28px 0 28px 28px;
    border: 7px solid #3a322f;
    z-index: -1;
  }

  .divisor {
    background: #3a322f;
    position: absolute;
    bottom: 33px;
    height: 5px;
    width: 100%;
  }

  .arm-2 {
    background: #f2f2f2;
    position: absolute;
    right: 79px;
    top: 121px;
    width: 45px;
    height: 98px;
    border-radius: 0 28px 28px 28px;
    border: 7px solid #3a322f;
    z-index: -1;
  }

  .divisor {
    background: #3a322f;
    position: absolute;
    bottom: 33px;
    height: 5px;
    width: 100%;
  }

  .leg {
    position: absolute;
    left: 126px;
    top: 211px;
    width: 35px;
    height: 15px;
    border-radius: 0 0 20px 20px;
    background: #e5e5e5;
    border: 7px solid #3a322f;
    border-top: 0;
  }

  .shadow {
    background: #d1d2d4;
    position: absolute;
    height: 10px;
    border-radius: 100%;
    width: 142px;
    left: 79px;
    bottom: 63px;
    z-index: -10;
  }
`)
