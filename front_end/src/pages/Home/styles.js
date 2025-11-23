import styled from "styled-components"


export const Main = styled.div`
`

export const Header = styled.div`
    
    display: flex;
    justify-content: center;    

    img {
       width: 200px;
       margin-bottom:20px;
    }    
`
export const AppContainer = styled.div`
    width: 1000px;
    height:75vh;    
    display: flex;
    flex-direction: column;    
    align-items: center; 
    justify-content: center;  
    gap: 20px;   
    background-color: #007bff;    
    border-radius: 40px;     
`
export const ChatContainer = styled.div`    
    width: 90%;
    max-width: 600px;
    background: #fff;
    border-radius: 10px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 40vh; 
`

export const MessageArea = styled.div`
    flex: 1;
    overflow-y: auto; 
    margin-bottom: 10px;    
`