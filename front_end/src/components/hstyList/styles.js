import styled from "styled-components";


export const P = styled.p`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;   
  color: #000;  
`

export const HistList = styled.ul`  
  list-style: none;
  border-radius: 5px;
  padding: 0;
  margin: 0;
`

export const MessageItem = styled.li`
  color: #000;  
  background: #1a73e8;
  border: 1px solid #1a73e8;
  padding: 15px;
  border-radius: 12px;
  margin-bottom: 15px;
  box-shadow: 0px 2px 4px rgba(0,0,0,0.05);

  strong {
    color: #000;
  }

  em {
    display: block;
    margin-top: 5px;
    color: #000;
  }
`