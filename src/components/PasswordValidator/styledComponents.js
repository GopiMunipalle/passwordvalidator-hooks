// Style your elements here
import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: #24263c;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  font-family: Roboto;
  background-color: #475569;
  border-radius: 10px;
`
export const Heading = styled.h1`
font-family:"Roboto"
font-size:30px;
color:#fff;
`
export const P = styled.p`
  font-family: Roboto;
  font-size: 20px;
  color: #f8fafc;
`

export const Input = styled.input`
  padding: 10px;
  outline: none;
  border-radius: 5px;
  border: transparent;
  cursor: pointer;
  width: 350px;
`
export const ErrorMsg = styled.p`
  color: red;
  font-weight: 400;
`
