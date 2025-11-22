import styled from "styled-components"

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;  
  margin: auto;
  font-family: "Inter", sans-serif;
`
export const Header = styled.div`
    display: flex;
    justify-content: center; 
    gap: 15px;

    img {
       width: 200px;
       margin-bottom:20px;
    }  
`

export const Title = styled.h1`
  font-size: 28px;
  color: #1a73e8;
  margin-bottom: 20px;
`

export const UserSelector = styled.select`
  max-width: 50%;
  padding: 10px 15px;
  font-size: 16px;
  border-radius: 8px;
  border: 2px solid #1a73e8;
  margin-bottom: 25px;
  outline: none;
  cursor: pointer;
`

export const MessageList = styled.ul`
  
  list-style: none;
  border-radius: 5px;
  padding: 0;
  margin: 0;

  p {
    color: #000;
  }
`

export const MessageItem = styled.li`
  color: #000;
  font-weight: bold;
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
export const BottonGroup = styled.div`
    display: flex;      
    justify-content: space-between;    
    gap: 10px;  
`