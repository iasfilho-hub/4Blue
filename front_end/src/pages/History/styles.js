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

export const BottonGroup = styled.div`
    display: flex;      
    justify-content: space-between;    
    gap: 10px;  
`