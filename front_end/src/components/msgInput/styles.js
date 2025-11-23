import styled from 'styled-components'

export const Form = styled.form`
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  gap: 10px;
`

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
`

export const Button = styled.button`  
  font-size: 18px;
  height: 50px;
  padding: 10px 20px;
  cursor: pointer;
  border: none;
  background: ${(props) => props.$variant === "danger" ? "#ff4d4d" : "#1db360ff"};
  color: #000;  
  border-radius: 5px;
  transition: 0.2s;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);

  &:hover {
    opacity: 0.8;
    transform: translateY(-4px);
  }

  &:active{
    
    transform: translateY(0);
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
  }
`