import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px; 
`

export const Title = styled.h3`
  font-size: 18px;
  color: #000;
`

export const List = styled.ul`
  width: 100%;
  list-style: none;
  padding: 0;
  color: #000;
`

export const Item = styled.li`
  margin-bottom: 15px;
  padding: 10px;
  background: #ccc;
  border-radius: 5px;
`