import styled from 'styled-components'

export const Container = styled.div`
    margin-bottom: 20px;
`

export const Title = styled.h3`
    font-size: 22px;
    margin-bottom: 10px;
    color: #000;
`

export const Button = styled.button`
  padding: 10px 20px;
  margin-right: 10px;
  height: 50px;
  border: none;
  background: ${(props) => (props.$active ? "#1db360ff" : "#ccc")};
  color: ${(props) => (props.$active ? "black" : "black")};  
  font-size: 18px;
  border-radius: 5px;
  transition: 0.2s;
  cursor: pointer;
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