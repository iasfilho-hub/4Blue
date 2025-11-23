import styled from "styled-components"


export const Main = styled.div`
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.8);
    border-radius: 50px;
    background-color: #ccc;
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
    background-color: #3b97f8ff;    
    border-radius: 40px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.8);     
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
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.8);  
`

export const MessageArea = styled.div`
    flex: 1;
    overflow-y: auto; 
    margin-bottom: 10px;    
`