import styled from "styled-components"

export const Input = styled.input`
  border: none;
  border-bottom: 5px solid white;
  background: transparent;
  font-size: 80px;
  height: 80px;
  width: 500px;
  color: white;
  outline: none;
  padding: 60px 0px 10px 0px;
  cursor: pointer;
  text-align: center;
  font-family: "Roboto", arial, sans-serif;
  font-weight: bold;
  &:hover,
  &:active {
    outline: none;
  }
  @media (max-width: 1030px) {
    font-size: 55px;
    height: 55px;
  }
  @media (max-width: 435px) {
    font-size: 40px;
    height: 40px;
    margin-top: 20px;
  }
  @media (max-height: 360px) {
    font-size: 30px;
  }
  @media (max-width: 360px) {
    font-size: 30px;
    height: 35px;
    margin-top: 10px;
  }
`
